function WrongAlert({ message }) {
  return (
    <div className="alert alert-danger mt-2 text-center" role="alert">
      {message}
    </div>
  );
}

export default WrongAlert;
