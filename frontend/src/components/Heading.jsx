import "../css/Heading.css";
import { useLocation } from "react-router-dom";
const Heading = ({ headingValue }) => {
  const location = useLocation();
  return (
    <section className="heading-container">
      <h1>{headingValue}</h1>
    </section>
  );
};
export default Heading;
