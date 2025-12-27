import "../css/NotesView.css";
const NotesView = ({ setOpen }) => {
  return (
    <div className="notes-list">
      <div className="notes-card">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ea,
          quaerat corporis sequi dolor repellendus. Eaque officia atque magni
          vel saepe recusandae cumque, in cupiditate, voluptas explicabo maiores
          error rerum.
        </p>
        <div className="btn-group">
          <button onClick={() => setOpen(true)}>update</button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};
export default NotesView;
