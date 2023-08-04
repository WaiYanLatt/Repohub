import { NavLink } from "react-router-dom";
import "../../assets/css/cus.css";
import { useState } from "react";




const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const menu = () => {
    setOpen(!open);
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white z-1000">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h3 className="fw-bold text-warning">Repohub</h3>
          </a>
          <div className="" id="navbarSupportedContent">
            <div
              className={`${open ? "show" : ""} menu-icon`}
              onClick={menu}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-top change shadow"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header container pb-0">
          <h3
            className="offcanvas-title fw-bold text-warning"
            id="offcanvasTopLabel"
          >
            Repohub
          </h3>
        </div>
        <div className="offcanvas-body container  py-lg-3 py-5">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item border-0 p-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-warning fw-bold h5 text-decoration-none"
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
                    ? "text-warning fw-bold h5 text-decoration-none"
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
                    ? "text-warning fw-bold h5 text-decoration-none"
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
                    ? "text-warning fw-bold h5 text-decoration-none"
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
