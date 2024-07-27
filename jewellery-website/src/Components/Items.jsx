import item from "../assets/categori1.webp";
import item1 from "../assets/categori2.webp";
import item2 from "../assets/categori3.webp";
import item3 from "../assets/categori4.webp";
import item4 from "../assets/categori5.webp";

function Items() {
  return (
    <div className="container mt-2 mb-4">
      <div className="row row-cols-3 gap-4">
        <div
          className="col-3"
          style={{
            width: "17%",
            backgroundColor: "#80808038",
            borderRadius: "50%",cursor:"pointer"
          }}
        >
          <img
            src={item}
            width="150px"
            height="150px"
            style={{ borderRadius: "50%", margin: "10px 0px 10px 10px" }}
          />
        </div>
        <div
          className="col-3"
          style={{
            width: "17%",
            backgroundColor: "#80808038",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <img
            src={item1}
            width="150px"
            height="150px"
            style={{ borderRadius: "50%", margin: "10px 0px 10px 10px" }}
          />
        </div>
        <div
          className="col-3"
          style={{
            width: "17%",
            backgroundColor: "#80808038",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <img
            src={item2}
            width="150px"
            height="150px"
            style={{ borderRadius: "50%", margin: "10px 0px 10px 10px" }}
          />
        </div>
        <div
          className="col-3"
          style={{
            width: "17%",
            backgroundColor: "#80808038",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <img
            src={item3}
            width="150px"
            height="150px"
            style={{ borderRadius: "50%", margin: "10px 0px 10px 10px" }}
          />
        </div>
        <div
          className="col-3"
          style={{
            width: "17%",
            backgroundColor: "#80808038",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <img
            src={item4}
            width="150px"
            height="150px"
            style={{ borderRadius: "50%", margin: "10px 0px 10px 10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Items;
