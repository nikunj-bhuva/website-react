import image2 from "../assets/radiance.webp";
import image3 from "../assets/earrings.webp";

function Collection2() {
  return (
    <div className="container mt-5">
      <div className="row row-cols-2">
        <div className="col-6 p-0">
          <img
            src={image2}
            width="530px;"
            height="249px"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-6 p-0">
          <img
            src={image3}
            width="530px;"
            height="249px"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Collection2;
