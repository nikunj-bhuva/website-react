import newArrivalLogo from "../assets/newarrivallogo.webp";

function Design({ modeValue, title, price, rPrice, offer, imgSrc, newImg }) {
  const imgUrl = `src/assets/${imgSrc}.png`;

  return (
    <div className="col-3">
      <div
        className={`card ${modeValue ? "card-dark" : "card-light"}`}
        style={{ height: "444px" }}
      >
        <img src={imgUrl} className="card-img-top" alt="..." />
        {title === "Siobhan Ring" ||
        title === "Norahi Pendent" ||
        title === "Sloan Watch Charm" ||
        title === "Nathali Earring" ||
        title === "Stella Watch Charm" ? (
          <img
            src={newArrivalLogo}
            width="90px"
            height="17px"
            style={{ position: "absolute", top: "10px", right: "6px" }}
            alt="..."
          />
        ) : null}
        <div className="card-body">
          <h5 className="card-title text-center" style={{ fontSize: "16px" }}>
            {title}
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
              from {price}
            </span>
            <span style={{ fontWeight: "600", fontSize: "16px" }}>
              <del style={{ color: "#ba444a" }}>{rPrice}</del>
            </span>
          </p>
          <p className="text-center">
            <span style={{ color: "#ba444a", fontWeight: "500" }}>{offer}</span>
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

export default Design;
