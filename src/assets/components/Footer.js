import { Link } from "react-router-dom";

const Footer = (props) => {
 return (
    <div>
        <section className="bg-white py-5">
        <div className="container mx-auto">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 text-center mb-3 mb-lg-0">
              <Link
                to="/"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Works
              </Link>
              <Link
                to="story"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Story
              </Link>
              <Link
                to="service"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Services
              </Link>
            </div>
            <div className="col-lg-4 text-center mb-2 mb-lg-0">
              <h1 className="fw-bold">Repohub</h1>
            </div>
            <div className="col-lg-4 text-center">
              <Link
                to="/"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Ceacer
              </Link>
              <Link
                to="contact"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
