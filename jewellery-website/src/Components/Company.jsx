import com from "../assets/popular1.webp";
import com1 from "../assets/popular2.webp";
import com2 from "../assets/popular3.webp";
import com3 from "../assets/popular4.webp";
import com4 from "../assets/popular5.webp";
import com5 from "../assets/popular6.webp";

function Company() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-12">
        <div className="col-2 p-0">
          <img src={com} width="184px" height="72px" />
        </div>
        <div className="col-2 p-0">
          <img src={com1} width="184px" height="72px" />
        </div>
        <div className="col-2 p-0">
          <img src={com2} width="184px" height="72px" />
        </div>
        <div className="col-2 p-0">
          <img src={com3} width="184px" height="72px" />
        </div>
        <div className="col-2 p-0">
          <img src={com4} width="184px" height="72px" />
        </div>
        <div className="col-2 p-0">
          <img src={com5} width="184px" height="72px" />
        </div>
      </div>
    </div>
  );
}

export default Company;
