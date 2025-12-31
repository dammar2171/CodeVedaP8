import { useContext } from "react";
import "../css/SearchContainer.css";
import { StoreContext } from "../store/Store";
function SearchContainer() {
  const { setOpenSearchModal, setSearchedNote } = useContext(StoreContext);

  const handleSearchModal = (e) => {
    e.preventDefault();
    setOpenSearchModal(true);
  };
  return (
    <div
      className="search-container"
      style={{ margin: "0 auto", padding: "1rem" }}
    >
      <form onSubmit={handleSearchModal}>
        <input
          type="search"
          onChange={(e) => setSearchedNote(e.target.value)}
          placeholder="Type here...."
        />
        <input type="submit" value={"🔎"} />
      </form>
    </div>
  );
}

export default SearchContainer;
