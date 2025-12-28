import { useContext, useRef } from "react";
import "../css/CreateNotes.css";
import { StoreContext } from "../store/Store";
import axios from "axios";
const CreateNotes = () => {
  const { handleAddNotes } = useContext(StoreContext);
  const titleRef = useRef();
  const detailRef = useRef();

  const handleCreateForm = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const detail = detailRef.current.value;

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://localhost:5000/notes/insertNotes",
        { title, detail },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleAddNotes(title, detail);
      alert("Note saved sucessfully");
      titleRef.current.value = "";
      detailRef.current.value = "";
    } catch (error) {
      console.log("Insertion Error", error);
    }
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
