function Categories({ modeValue }) {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12">
          <h3 className={`${modeValue ? "all-categori-title-dark" : null}`}>
            All Categories
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Categories;
