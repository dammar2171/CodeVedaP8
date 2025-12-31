import { useContext } from "react";
import "../css/NoteSearchModal.css";
import { StoreContext } from "../store/Store";
function SearchModal({ setOpen }) {
  const { setOpenSearchModal, search, handleDeleteNotes, setSelectedNote } =
    useContext(StoreContext);

  const handleUpdateBtn = (note) => {
    setSelectedNote(note);
    setOpen(true);
  };

  return (
    <div className="searchModal-overlay">
      <div className="searchModal-card">
        <div className="header d-flex justify-content-between">
          <h2>Searched Note</h2>
          <button
            onClick={() => setOpenSearchModal(false)}
            className="btn btn-secondary"
          >
            cancel
          </button>
        </div>
        <div className="main-content">
          {search.map((item, index) => (
            <div className="search-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="btn-group">
                <button
                  onClick={() => {
                    setOpenSearchModal(false);
                    handleUpdateBtn(item);
                  }}
                >
                  update
                </button>
                <button onClick={() => handleDeleteNotes(item.title)}>
                  delete
                </button>
              </div>
            </div>
          ))}

          {search.length == 0 && (
            <div className=" text-center text-danger fs-4">Notes not found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
