import design5 from "../assets/design5.webp";
import design6 from "../assets/design6.webp";
import design7 from "../assets/design7.webp";
import design8 from "../assets/design8.webp";
import newlogo from "../assets/newarrivallogo.webp";

function Design2() {
  return (
    <div className="container">
      <div className="row row-cols-4 mt-4 mb-5">
        <div className="col">
          <div className="card" style={{ width: "16rem", cursor: "pointer" }}>
            <img
              src={design5}
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
                Sloan Watch Charm
              </h5>
              <p
                className="card-text text-center"
                style={{ marginBottom: "55px" }}
              ></p>
              <p className="text-center">
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  from ₹4,463
                </span>
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-outline-info text-dark"
                  style={{ fontWeight: "500" }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "16rem", cursor: "pointer" }}>
            <img src={design6} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Tempest Ring
              </h5>
              <p
                className="card-text text-center"
                style={{ marginBottom: "55px" }}
              ></p>
              <p className="text-center">
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  from ₹9,473
                </span>
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-outline-info text-dark"
                  style={{ fontWeight: "500" }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "16rem", cursor: "pointer" }}>
            <img src={design7} className="card-img-top" alt="..." />
            <div className="card-body pb-3">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Nathali Earring
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
                  from ₹29,505
                </span>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>
                  <del>₹30,061</del>
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
                  className="btn btn-outline-info text-dark"
                  style={{ fontWeight: "500" }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "16rem", cursor: "pointer" }}>
            <img
              src={design8}
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
                Stella Watch Charm
              </h5>
              <p className="card-text text-center"></p>
              <p className="text-center" style={{ marginBottom: "55px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  from ₹4,599
                </span>
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-outline-info text-dark"
                  style={{ fontWeight: "500" }}
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

export default Design2;
