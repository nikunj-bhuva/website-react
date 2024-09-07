function Month({ modeValue }) {
  console.log(modeValue);
  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-12">
          <h3
            className={`${
              modeValue ? "design-month-dark-title" : "design-month-light-title"
            }`}
          >
            Designs Of The Month
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Month;
