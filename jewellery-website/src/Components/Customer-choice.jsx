function Customerchoice({ title, price, ratings, modeValue, imgSrc }) {
  let commonClasses = `card ${modeValue ? "card-dark" : "card-light"}`;
  let imgUrl = `src/assets/${imgSrc}.png`;
  return (
    <div className="col-3">
      <div className={`${commonClasses}`}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text text-center">
            <span style={{ color: "#ed8a50" }}>
              {ratings >= 6 ? (
                <>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star"></i>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star"></i>
                </>
              )}
            </span>
            <span className="ms-2 fw-medium text-danger">
              {ratings} Ratings
            </span>
          </p>
          <p className="text-center">
            <span>
              <sub
                style={{
                  marginRight: "5px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                from
              </sub>
              <sup
                style={{
                  marginRight: "5px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {price}
              </sup>
            </span>
          </p>
          <div className="text-center">
            <a
              href="#"
              className={`btn btn-outline-info ${
                modeValue ? "card-dark-btn" : "card-light-btn"
              } fw-bolder`}
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customerchoice;
