import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h3 className="fw-bold">Repohub</h3>
          </a>
          <div className="" id="navbarSupportedContent">
            <button
              className="btn border-0 fw-semibold"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-top shadow"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header container pb-0">
          <h3 className="offcanvas-title fw-bold" id="offcanvasTopLabel">
            Repohub
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body container ">
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 p-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary fw-bold h5 text-decoration-none"
                    : "fw-semibold h5 text-decoration-none"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="list-group-item border-0 p-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary fw-bold h5 text-decoration-none"
                    : "fw-semibold h5 text-decoration-none"
                }
                to="story"
              >
                Story
              </NavLink>
            </li>
            <li className="list-group-item border-0 p-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary fw-bold h5 text-decoration-none"
                    : "fw-semibold h5 text-decoration-none"
                }
                to="service"
              >
                Service
              </NavLink>
            </li>
            <li className="list-group-item border-0 p-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary fw-bold h5 text-decoration-none"
                    : "fw-semibold h5 text-decoration-none"
                }
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
