import Container from "../components/Container";
import CreateNotes from "../components/CreateNotes";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <Container>
      <Heading headingValue={"Secure Notes App"} />
      <CreateNotes />
    </Container>
  );
};
export default Home;
