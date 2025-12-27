import Container from "../components/Container";
import Heading from "../components/Heading";
import NotesUpdateModal from "../components/NotesUpdateModal";
import NotesView from "../components/NotesView";
import { useState } from "react";
const Notes = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Heading headingValue={"Your secure notes here..."} />
      <NotesView setOpen={setOpen} />
      <NotesUpdateModal isOpen={open} setOpen={setOpen} />
    </Container>
  );
};
export default Notes;
