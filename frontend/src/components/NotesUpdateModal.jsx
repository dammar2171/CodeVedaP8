import { useContext, useEffect, useState } from "react";
import "../css/NotesUpdateModal.css";
import { StoreContext } from "../store/Store";

const NotesUpdateModal = ({ isOpen, setOpen }) => {
  const { selectedNote, handleUpdateNotes } = useContext(StoreContext);

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setDetail(selectedNote.detail);
    }
  }, [selectedNote]);

  if (!isOpen) return null;

  const handleUpdate = () => {
    handleUpdateNotes(selectedNote.title, title, detail);
    setOpen(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Update Note</h2>

        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description</label>
        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></textarea>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="btn-update" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesUpdateModal;
