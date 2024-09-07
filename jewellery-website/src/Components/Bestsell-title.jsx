function Bestselltitle({ modeValue }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className={`${modeValue ? "best-sell-title-dark" : null}`}>
            Best Selling
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Bestselltitle;
