function Customer({ modeValue }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-4 mb-4">
          <h3 className={`${modeValue ? "customer-title-dark" : null}`}>
            Customer Choice
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Customer;
