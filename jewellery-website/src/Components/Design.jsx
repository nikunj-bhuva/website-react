import design from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import newlogo from "../assets/newarrivallogo.webp";

function Design({ modeValue }) {
  return (
    <div className="container">
      <div className="row row-cols-4 mt-4 mb-5">
        <div className="col">
          <div className={`card ${modeValue ? "card-dark" : "card-light"}`}>
            <img src={design} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Siobhan Ring
              </h5>
              <p className="card-text text-center"></p>
              <p className="text-center">
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    marginRight: "6px",
                  }}
                >
                  from ₹12,509
                </span>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>
                  <del>₹15,249</del>
                </span>
              </p>
              <p className="text-center">
                <span style={{ color: "#ba444a", fontWeight: "500" }}>
                  Save 18%
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
          <div className={`card ${modeValue ? "card-dark" : "card-light"}`}>
            <img src={design2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Rylay Solitaire Earring
              </h5>
              <p className="card-text text-center"></p>
              <p className="text-center" style={{ marginBottom: "55px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  from ₹164,687
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
          <div className={`card ${modeValue ? "card-dark" : "card-light"}`}>
            <img src={design3} className="card-img-top" alt="..." />
            <div className="card-body pb-3">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Norahi Pendent
              </h5>
              <p className="card-text text-center"></p>
              <p className="text-center">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginRight: "6px",
                  }}
                >
                  from ₹69,444
                </span>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>
                  <del>₹15,249</del>
                </span>
              </p>
              <p className="text-center">
                <span style={{ color: "#ba444a", fontWeight: "500" }}>
                  Save 2%
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
          <div className={`card ${modeValue ? "card-dark" : "card-light"}`}>
            <img
              src={design4}
              className="card-img-top"
              alt="..."
              style={{ position: "relative" }}
            />
            <img
              src={newlogo}
              width="90px"
              height="17px"
              style={{ position: "absolute", top: "10px", right: "6px" }}
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Spencer Watch Charm
              </h5>
              <p className="card-text text-center"></p>
              <p className="text-center" style={{ marginBottom: "55px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  from ₹3,782
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

export default Design;
