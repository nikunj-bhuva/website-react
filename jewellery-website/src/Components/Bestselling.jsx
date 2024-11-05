import saleLogo from "../assets/bestsallerlogo.webp";

function Bestselling({ modeValue, title, price, imgSrc }) {
  const imgUrl = `src/assets/${imgSrc}.png`;
  return (
    <div className="col-3">
      <div className={`card ${modeValue ? "card-dark" : "card-light "}`}>
        <img
          src={imgUrl}
          className="card-img-top"
          alt="..."
          style={{ position: "relative" }}
        />
        <img
          src={saleLogo}
          width="90px"
          height="17px"
          style={{ position: "absolute", top: "8px", right: "2px" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center" style={{ fontSize: "16px" }}>
            {title}
          </h5>
          <p className="card-text text-center"></p>
          <p className="text-center">
            <span style={{ fontWeight: "600", fontSize: "16px" }}>
              from {price}
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

export default Bestselling;
