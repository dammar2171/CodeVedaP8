import "../css/Heading.css";
const Heading = ({ headingValue }) => {
  return (
    <section className="heading-container">
      <h1>{headingValue}</h1>
    </section>
  );
};
export default Heading;
