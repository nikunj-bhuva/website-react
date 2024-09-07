import image from "../assets/rings.webp";
import image1 from "../assets/diamond.webp";

function Collection1() {
  return (
    <div className="container mt-5">
      <div className="row row-cols-2">
        <div className="col-6 p-0">
          <img
            src={image}
            width="530px;"
            height="249px"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-6 p-0">
          <img
            src={image1}
            width="530px;"
            height="249px"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Collection1;
