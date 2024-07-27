import item5 from "../assets/categori6.webp";
import item6 from "../assets/categori7.webp";
import item7 from "../assets/categori8.webp";
import item8 from "../assets/categori9.webp";
import item9 from "../assets/categori10.webp";

function Items2() {
  return (
    <div className="container mt-2">
      <div className="row row-cols-3 gap-4">
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
            src={item5}
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
            src={item6}
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
            src={item7}
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
            src={item8}
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
            src={item9}
            width="150px"
            height="150px"
            style={{ borderRadius: "50%", margin: "10px 0px 10px 10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Items2;
