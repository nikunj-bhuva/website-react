import React from "react";

function Footer({ modeValue }) {
  return (
    <footer
      className={`footer ${modeValue ? "footer-dark" : "footer-light"} mt-5`}
    >
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h3 className="fw-bolder" role="button">
              ABOUT US
            </h3>
            <p className="fw-medium" role="button">
              Our Story
            </p>
            <p className="fw-medium" role="button">
              Why Buy From Us
            </p>
            <p className="fw-medium" role="button">
              Gokul Jewels
            </p>
            <p className="fw-medium" role="button">
              Corporate Gifting
            </p>
            <p className="fw-medium" role="button">
              Our Blogs
            </p>
            <p className="fw-medium" role="button">
              Press Room
            </p>
          </div>
          <div className="col">
            <h3 className="fw-bolder" role="button">
              JEWELLERY GUIDE
            </h3>
            <p className="fw-medium" role="button">
              Buying & Price Guide
            </p>
            <p className="fw-medium" role="button">
              Diamond Guide
            </p>
            <p className="fw-medium" role="button">
              Jewellery Care Guide
            </p>
            <p className="fw-medium" role="button">
              Certification Guide
            </p>
          </div>
          <div className="col">
            <h3 className="fw-bolder" role="button">
              OUR POLICIES
            </h3>
            <p className="fw-medium" role="button">
              Terms of Service
            </p>
            <p className="fw-medium" role="button">
              Privacy Policy
            </p>
            <p className="fw-medium" role="button">
              Shipping/Return Policy
            </p>
            <p className="fw-medium" role="button">
              Buyback & Exchange Policy
            </p>
          </div>
          <div className="col">
            <h3 className="fw-bolder" role="button">
              GET IN TOUCH
            </h3>
            <p className="fw-medium" role="button">
              <i className="fa-solid fa-phone me-2"></i>+91 8976825413
            </p>
            <p className="fw-medium" role="button">
              <i className="fa-solid fa-envelope me-2"></i>shop@kisna.com
            </p>
            <p className="fw-medium" role="button">
              <i className="fa-solid fa-clock me-2"></i>(09:00AM to 06:00PM Mon
              to Sat)
            </p>
            <p className="fw-medium" role="button">
              Contact Us
            </p>
            <div className="footer-social">
              <i
                className="fa-brands fa-square-instagram fs-4"
                role="button"
              ></i>
              <i className="fa-brands fa-facebook fs-4" role="button"></i>
              <i className="fa-brands fa-twitter fs-4" role="button"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
