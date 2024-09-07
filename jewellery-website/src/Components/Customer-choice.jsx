import choice from "../assets/chain.png";
import choice1 from "../assets/customerring.png";
import choice2 from "../assets/customearring.png";
import choice3 from "../assets/cs-4.png";

function Customerchoice({ modeValue }) {
  let commonClasses = `card ${modeValue ? "card-dark" : "card-light"}`;

  return (
    <div className="container">
      <div className="row row-cols-4 mt-2 mb-5">
        <div className="col">
          <div className={`${commonClasses}`}>
            <img src={choice} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Alpha S Unisex Pendent</h5>
              <p className="card-text text-center">
                <span style={{ color: "#ed8a50" }}>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>6 Ratings</span>
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
                    ₹5,166
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
        <div className="col">
          <div className={`${commonClasses}`}>
            <img src={choice1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Rivka Ring</h5>
              <p className="card-text text-center">
                <span style={{ color: "#ed8a50" }}>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  12 Ratings
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
                  <sup style={{ fontSize: "16px", fontWeight: "600" }}>
                    ₹6,732
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
        <div className="col">
          <div className={`${commonClasses}`}>
            <img src={choice2} className="card-img-top" alt="..." />
            <div className="card-body pt-0 pb-2">
              <h5 className="card-title text-center">
                Radiating Imperial Ring
              </h5>
              <p className="card-text text-center">
                <span style={{ color: "#ed8a50" }}>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  4 Ratings
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
                  <sup style={{ fontSize: "16px", fontWeight: "600" }}>
                    ₹22,839
                  </sup>
                </span>
                <span>
                  <sup
                    style={{
                      marginLeft: "5px",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    <del>₹23,615</del>
                  </sup>
                </span>
              </p>
              <span className="save-white">Save 3%</span>
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
        <div className="col">
          <div className={`${commonClasses}`}>
            <img src={choice3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Grace Nose Stud</h5>
              <p className="card-text text-center">
                <span style={{ color: "#ed8a50" }}>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star me-1"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  3 Ratings
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
                  <sup style={{ fontSize: "16px", fontWeight: "600" }}>
                    ₹7,149
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
      </div>
    </div>
  );
}

export default Customerchoice;
