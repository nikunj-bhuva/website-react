function Popular({modeValue}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className={`${modeValue ? "popular-title-dark" : null}`}>
            Popular Collection
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Popular;
