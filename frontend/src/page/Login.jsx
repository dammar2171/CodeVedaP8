import Container from "../components/Container";
import Heading from "../components/Heading";
import LoginUser from "../components/LoginUser";

const Login = () => {
  return (
    <Container>
      <Heading headingValue={"Welcome to login page"} />
      <LoginUser />
    </Container>
  );
};
export default Login;
