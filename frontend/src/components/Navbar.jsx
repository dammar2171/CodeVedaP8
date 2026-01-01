import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { useContext } from "react";
import { StoreContext } from "../store/Store";

const Navbar = () => {
  const { authenticated, dispatch, setAuthenticated } =
    useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();
  const hanndleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    navigate("/");
    dispatch({ type: "SET_NOTES", payload: [] });
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">SecureNotes</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
        <li>
          <NavLink to="/notes">Notes</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
        {authenticated &&
          location.pathname !== "/" &&
          location.pathname !== "/signup" && (
            <li>
              <button className="btn btn-danger" onClick={hanndleLogout}>
                Logout
              </button>
            </li>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
