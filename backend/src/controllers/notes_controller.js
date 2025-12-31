import db from "../config/db.js"; 

export const insertNotes = async (req, res) => {
  const { title, detail } = req.body;
  const userID = req.user.id;

  const sql = "INSERT INTO notes(title, detail, userId) VALUES($1, $2, $3) RETURNING *";

  try {
    const result = await db.query(sql, [title, detail, userID]);
    return res.status(200).json({ message: "Data inserted successfully", result: result.rows[0] });
  } catch (err) {
    console.log("DATABASE_ERROR:", err);
    return res.status(500).json({ message: "Insertion failed" });
  }
};

export const fetchNotes = async (req, res) => {
  const userID = req.user.id;
  const sql = "SELECT * FROM notes WHERE userId = $1";

  try {
    const result = await db.query(sql, [userID]);
    return res.status(200).json({ message: "Data fetched successfully", result: result.rows });
  } catch (err) {
    console.log("DATABASE_ERROR:", err);
    return res.status(500).json({ message: "Fetching error" });
  }
};

export const deleteNote = async (req, res) => {
  const { title } = req.params;
  const userId = req.user.id;

  const sql = "DELETE FROM notes WHERE title = $1 AND userId = $2";

  try {
    await db.query(sql, [title, userId]);
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.log("DELETION_ERROR:", err);
    return res.status(500).json({ message: "Deletion error" });
  }
};

export const updateNote = async (req, res) => {
  const { title } = req.params;
  const { updatedTitle, updatedDetail } = req.body;
  const userId = req.user.id;

  const sql = "UPDATE notes SET title = $1, detail = $2 WHERE title = $3 AND userId = $4";

  try {
    await db.query(sql, [updatedTitle, updatedDetail, title, userId]);
    return res.status(200).json({ message: "Updated successfully" });
  } catch (err) {
    console.log("UPDATION_ERROR:", err);
    return res.status(500).json({ message: "Updation error" });
  }
};
