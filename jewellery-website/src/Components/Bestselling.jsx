import bestsale from "../assets/bestsale1.webp";
import bestsale2 from "../assets/bestsale2.webp";
import bestsale3 from "../assets/bestsale3.webp";
import bestsale4 from "../assets/bestsale4.webp";
import salelogo from "../assets/bestsallerlogo.webp";

function Bestselling() {
  return (
    <div className="container">
      <div className="row row-cols-4 mt-4 mb-5">
        <div className="col">
          <div className="card" style={{ width: "16rem", cursor: "pointer" }}>
            <img
              src={bestsale}
              className="card-img-top"
              alt="..."
              style={{ position: "relative" }}
            />
            <img
              src={salelogo}
              width="90px"
              height="17px"
              style={{ position: "absolute", top: "8px", right: "2px" }}
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Alpha S Unisex Pendent
              </h5>
              <p className="card-text text-center"></p>
              <p className="text-center">
                <span style={{ fontWeight: "600", fontSize: "16px" }}>
                  from ₹5,166
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
              src={bestsale2}
              className="card-img-top"
              alt="..."
              style={{ position: "relative" }}
            />
            <img
              src={salelogo}
              width="90px"
              height="17px"
              style={{ position: "absolute", top: "8px", right: "2px" }}
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Alphabet A Unisex Pendent
              </h5>
              <p className="card-text text-center"></p>
              <p className="text-center">
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  from ₹5,938
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
              src={bestsale3}
              className="card-img-top"
              alt="..."
              style={{ position: "relative" }}
            />
            <img
              src={salelogo}
              width="90px"
              height="17px"
              style={{ position: "absolute", top: "8px", right: "2px" }}
            />
            <div className="card-body pb-3">
              <h5
                className="card-title text-center"
                style={{ fontSize: "16px" }}
              >
                Feya Earring
              </h5>
              <p className="card-text text-center"></p>
              <p className="text-center">
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  from ₹6,593
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
              src={bestsale4}
              className="card-img-top"
              alt="..."
              style={{ position: "relative" }}
            />
            <img
              src={salelogo}
              width="90px"
              height="17px"
              style={{ position: "absolute", top: "8px", right: "2px" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center" style={{ fontSize: "16px" }}>Blooming Flower Ring</h5>
              <p className="card-text text-center"></p>
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
      </div>
    </div>
  );
}

export default Bestselling;
