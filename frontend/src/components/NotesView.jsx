import { useContext } from "react";
import "../css/NotesView.css";
import { StoreContext } from "../store/Store";
const NotesView = ({ setOpen }) => {
  const { notes, handleDeleteNotes, setSelectedNote } =
    useContext(StoreContext);

  const handleUpdateBtn = (note) => {
    setSelectedNote(note);
    setOpen(true);
  };
  return (
    <div className="notes-list">
      {notes.map((item, index) => (
        <div className="notes-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
          <div className="btn-group">
            <button onClick={() => handleUpdateBtn(item)}>update</button>
            <button onClick={() => handleDeleteNotes(item.title)}>
              delete
            </button>
          </div>
        </div>
      ))}

      {notes.length === 0 && (
        <div className="notes-card">
          <h1 className="text-danger text-center">Empty notes</h1>
        </div>
      )}
    </div>
  );
};
export default NotesView;
