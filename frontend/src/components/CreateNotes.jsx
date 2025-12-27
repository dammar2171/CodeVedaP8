import { useContext, useRef } from "react";
import "../css/CreateNotes.css";
import { StoreContext } from "../store/Store";
const CreateNotes = () => {
  const { handleAddNotes } = useContext(StoreContext);
  const titleRef = useRef();
  const detailRef = useRef();

  const handleCreateForm = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const detail = detailRef.current.value;
    console.log(title, detail);

    handleAddNotes(title, detail);
    titleRef.current.value = "";
    detailRef.current.value = "";
  };
  return (
    <div className="custom-card">
      <form className="form" onSubmit={handleCreateForm}>
        <label className="formnotes-heading">Title</label>
        <input
          type="text"
          ref={titleRef}
          placeholder="Write notes title here..."
        />
        <br />
        <label className="formnotes-description">Write notes..</label>
        <textarea
          ref={detailRef}
          placeholder="Write your secure note here..."
        ></textarea>
        <button className="save-btn">Save Note</button>
      </form>
    </div>
  );
};
export default CreateNotes;
