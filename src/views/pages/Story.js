import { NavLink } from "react-router-dom";
import Img_Home from "../../assets/img/digital.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Story = (props) => {
  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      origin: "bottom",
      distance: "100px",
      duration: 2000,
      reset: true,
      interval: 200,
      scale: 0.8,
      viewFactor: 0.2,
    });
  }, []);

  return (
    <div>
       {/* Story section */}
       <section className="my-5">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-normal mt-5 ">Our Story</h1>
              <h1 className="fw-semibold mt-5 headline">
                We developer conplex interface systems <br /> for Web , Mobile &
                Ar
              </h1>
              <img src={Img_Home} className="img-fluid mt-5" />
            </div>
            <div className="col mt-5">
               <div>
                 <h1 className="fs101 fw-bold ">30</h1>
                 <p className="fw-semibold headline">Employers</p>
               </div>
            </div>
            <div className="col mt-5">
               <div>
                 <h1 className="fs101 fw-bold ">5</h1>
                 <p className="fw-semibold headline">years of Experiences</p>
               </div>
            </div>
          </div>
        </div>
      </section><hr className="text-secondary"/>
       {/* footer section */}
       <section className="bg-white py-3 py-lg-5 ">
        <div className="container mx-auto">
          <div className="row my-5">
            <div className="col text-center">
              <h5 className="fw-semibold text-secondary mt-3">Next</h5>
              <h1 className="fw-bold mt-3">Our Service</h1>
              <i className="fa-solid fa-arrow-right fs-3"></i>
            </div>
          </div>
        </div>
      </section>
      {/* footer menu section */}
      <section className="bg-white py-5">
        <div className="container mx-auto">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 text-center mb-3 mb-lg-0">
              <NavLink
                to="/"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Works
              </NavLink>
              <NavLink
                to="story"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Story
              </NavLink>
              <NavLink
                to="service"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Services
              </NavLink>
            </div>
            <div className="col-lg-4 text-center mb-2 mb-lg-0">
              <h1 className="fw-bold">Repohub</h1>
            </div>
            <div className="col-lg-4 text-center">
              <NavLink
                to="/"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Ceacer
              </NavLink>
              <NavLink
                to="contact"
                className="fw-semibold text-black text-decoration-none h5 mx-3"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
