import logo from "../assets/jewelrylogo.png (1).png";
import DarkMode from "../Components/Darkmode.jsx";

function Navbar({ modeValue, setModeValue }) {
  let commonClasses = `${modeValue ? "nav-item-light" : "nav-item-khakhi"}`;

  return (
    <nav
      className={`navbar ${
        modeValue ? "navbar-dark" : "navbar-light"
      } navbar-expand-lg shadow-lg`}
    >
      <div
        className="container-fluid d-flex justify-content-around"
        style={{ height: "70px" }}
      >
        <div className="logo" style={{ height: "70px" }}>
          <a className="navbar-brand" href="#">
            <img
              className={`nav-logo-khakhi align-content-center`}
              src={logo}
            />
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
          <div>
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 align-content-center"
              role="button"
            >
              <li className="nav-item">
                <a
                  className={`nav-link ${commonClasses} active`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${commonClasses}`} href="#">
                  Rings
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link ${commonClasses} dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Earrings
                </a>
                <ul
                  className={`${
                    modeValue ? "drop-down-dark" : null
                  } dropdown-menu p-2 m-2 h-auto`}
                >
                  <li className={`${commonClasses} nav-height`}>
                    <a className="dropdown-item ms-5" href="#"></a>
                    STUDS
                  </li>
                  <li className={`${commonClasses} nav-height mb-3`}>
                    <a className="dropdown-item ms-5" href="#"></a>
                    <hr className="dropdown-divider" />
                    JHUMKAS
                  </li>
                  <li className={`${commonClasses} nav-height mb-3`}>
                    <a className="dropdown-item ms-5" href="#"></a>
                    <hr className="dropdown-divider" />
                    EARCUFFS
                  </li>
                  <li className={`${commonClasses} nav-height pb-2 mb-3`}>
                    <a className="dropdown-item" href="#"></a>
                    <hr className="dropdown-divider" />
                    PEARL EARRINGS
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-height">
                <a
                  className={`nav-link ${commonClasses} active`}
                  aria-disabled="true"
                >
                  Bracelets & Bangles
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${commonClasses} active`}
                  aria-disabled="true"
                >
                  Mangalsutras
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${commonClasses} active`}
                  aria-disabled="true"
                >
                  Necklaces
                </a>
              </li>
            </ul>
          </div>
          <div>
            <form
              className="d-flex px-5 align-content-center"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn ${
                  modeValue ? "search-btn-dark" : "search-btn-khaki"
                } fw-medium`}
                type="submit"
              >
                Search
              </button>
              <DarkMode modeValue={modeValue} setModeValue={setModeValue} />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
