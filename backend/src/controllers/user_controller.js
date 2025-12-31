import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
   
    const sql = "INSERT INTO users(fullname, email, password) VALUES($1, $2, $3) RETURNING *";

    const result = await db.query(sql, [fullname, email, hashedPassword]);

    return res.status(200).json({
      message: "Data inserted successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.log("INSERTION_ERROR:", err);
    return res.status(500).json({ message: "Insertion failed" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const sql = "SELECT * FROM users WHERE email = $1";

    const result = await db.query(sql, [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = result.rows[0];

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({ message: "Credentials do not match" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.log("FETCHING_ERROR:", err);
    return res.status(500).json({ message: "Fetching problem" });
  }
};
