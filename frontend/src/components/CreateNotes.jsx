import "../css/CreateNotes.css";
const CreateNotes = () => {
  return (
    <div className="custom-card">
      <div className="form">
        <label className="formnotes-heading">Title</label>
        <input type="text" placeholder="Write notes title here..." />
        <br />
        <label className="formnotes-description">Write notes..</label>
        <textarea placeholder="Write your secure note here..."></textarea>
        <button className="save-btn">Save Note</button>
      </div>
    </div>
  );
};
export default CreateNotes;
