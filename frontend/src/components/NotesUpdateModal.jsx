import "../css/NotesUpdateModal.css";
const NotesUpdateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Update Note</h2>

        <label>Title</label>
        <input type="text" placeholder="Update title" />

        <label>Description</label>
        <textarea placeholder="Update your note..."></textarea>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-update">Update</button>
        </div>
      </div>
    </div>
  );
};

export default NotesUpdateModal;
