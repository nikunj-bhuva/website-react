import banner from "../assets/saftybanner.webp";

function Banner() {
  return (
    <div className="conatiner text-center overflow-hidden mb-5">
      <div className="row">
        <div className="col-12">
          <img src={banner} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
