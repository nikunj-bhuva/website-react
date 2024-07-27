import logo from "../assets/jewelrylogo.png (1).png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" style={{ height: "68px" }}>
      <div className="container-fluid">
        <div className="logo">
          <a className="navbar-brand" href="#">
            <img src={logo} style={{ width: "235px", objectFit: "cover" }} />
          </a>
        </div>
        <div>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse mt-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{
                  color: "#c3b048",
                  textShadow: "1px 1px 1px #343a40",
                  fontWeight: "600",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "#c3b048",
                  textShadow: "1px 1px 1px #343a40",
                  fontWeight: "600",
                }}
              >
                Rings
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "#c3b048",
                  textShadow: "1px 1px 1px #343a40",
                  fontWeight: "600",
                }}
              >
                Earrings
              </a>
              <ul className="dropdown-menu">
                <li
                  style={{
                    color: "#c3b048",
                    textShadow: "0px 0px 1px #343a40",
                    fontWeight: "600",
                  }}
                >
                  <a className="dropdown-item ms-5" href="#"></a>
                  STUDS
                </li>
                <li
                  style={{
                    color: "#c3b048",
                    textShadow: "0px 0px 1px #343a40",
                    fontWeight: "600",
                  }}
                >
                  <a className="dropdown-item ms-5" href="#"></a>
                  <hr className="dropdown-divider" />
                  JHUMKAS
                </li>
                <li
                  style={{
                    color: "#c3b048",
                    textShadow: "0px 0px 1px #343a40",
                    fontWeight: "600",
                  }}
                >
                  <a className="dropdown-item ms-5" href="#"></a>
                  <hr className="dropdown-divider" />
                  EARCUFFS
                </li>
                <li
                  style={{
                    color: "#c3b048",
                    textShadow: "0px 0px 1px #343a40",
                    fontWeight: "600",
                  }}
                >
                  <a className="dropdown-item" href="#"></a>
                  <hr className="dropdown-divider" />
                  PEARL EARRINGS
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                aria-disabled="true"
                style={{
                  color: "#c3b048",
                  textShadow: "1px 1px 1px #343a40",
                  fontWeight: "600",
                }}
              >
                Bracelets & Bangles
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                aria-disabled="true"
                style={{
                  color: "#c3b048",
                  textShadow: "1px 1px 1px #343a40",
                  fontWeight: "600",
                }}
              >
                Mangalsutras
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                aria-disabled="true"
                style={{
                  color: "#c3b048",
                  textShadow: "1px 1px 1px #343a40",
                  fontWeight: "600",
                }}
              >
                Necklaces
              </a>
            </li>
          </ul>
          <form className="d-flex px-5" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit" style={{border:"2px solid #c3b048", color:"white", fontSize:"18px"}}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
