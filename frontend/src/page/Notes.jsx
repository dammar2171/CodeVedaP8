import Container from "../components/Container";
import Heading from "../components/Heading";
import NotesUpdateModal from "../components/NotesUpdateModal";
import NotesView from "../components/NotesView";
import { useContext, useState } from "react";
import SearchContainer from "../components/SearchContainer";
import SearchModal from "../components/SearchModal";
import { StoreContext } from "../store/Store";
const Notes = () => {
  const [open, setOpen] = useState(false);
  const { openSearchModal } = useContext(StoreContext);

  return (
    <Container>
      <Heading headingValue={"Your secure notes here..."} />
      <SearchContainer />

      {openSearchModal && <SearchModal setOpen={setOpen} />}
      <NotesView setOpen={setOpen} />
      <NotesUpdateModal isOpen={open} setOpen={setOpen} />
    </Container>
  );
};
export default Notes;
