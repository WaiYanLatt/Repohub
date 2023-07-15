import { NavLink } from "react-router-dom";
import Img_Home from "../../assets/img/digital.png";
import Service1 from "../../assets/img/our_service_1 1.png";
import Service2 from "../../assets/img/our_service_2 1.png";
import Service4 from "../../assets/img/our_service_4 1.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Service = (props) => {
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
      {/* Service section */}
      <section className="my-5">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-normal mt-5">Services</h1>
              <h1 className="fw-semibold mt-5 headline">
                We developer conplex interface systems <br /> for Web , Mobile &
                Ar
              </h1>
              <img src={Img_Home} className="img-fluid mt-5" />
            </div>
          </div>
        </div>
      </section>
      {/* Research section */}
      <section className="my-5">
        <div className="container mx-auto">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <h1 className="fw-bold mt-5">Research & Analytics</h1>
              <p className="my-3 fw-semibold headline">
                We immerse ourselves in the analytics of your business, in order
                to study all the subtleties and determine target audience.
              </p>
              <div className="row">
                <div className="col-lg-5 my-lg-5 my-3">
                  <h1>What we do</h1>
                  <p className="fw-semibold headline mt-lg-3">- Analyze cliente business</p>
                  <p className="fw-semibold headline">- Branding Strategy</p>
                  <p className="fw-semibold headline">- Research opportunities</p>
                </div>
                <div className="col-lg-5 my-lg-5">
                  <p className="fw-semibold headline mt-lg-5 pt-lg-3">
                    - Create information architecture
                  </p>
                  <p className="fw-semibold headline">- Study the target audience</p>
                  <p className="fw-semibold headline">- Production planning</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <img src={Service1} />
            </div>
          </div>
        </div>
      </section>
      <hr className="text-secondary" />
      {/* Product section */}
      <section className="my-5">
        <div className="container mx-auto">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <h1 className="fw-bold">Product design</h1>
              <p className="my-3 fw-semibold headline">
                We know how to create complex and intuitive interface systems
                that are enjoyable to use.
              </p>
              <div className="row">
                <div className="col-lg-5 my-lg-5 my-3">
                  <h1>What we do</h1>
                  <p className="fw-semibold headline mt-3">- Interface design</p>
                  <p className="fw-semibold headline">- Visual Identity</p>
                  <p className="fw-semibold headline">- Corporate & Promo landings</p>
                </div>
                <div className="col-lg-5 my-lg-5">
                  <p className="fw-semibold headline mt-lg-5 pt-lg-3">
                    - UI Kits & Libraries
                  </p>
                  <p className="fw-semibold headline">- E-commerce</p>
                  <p className="fw-semibold headline">- Apps for iOS & Android</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <img src={Service2} />
            </div>
          </div>
        </div>
      </section>
      <hr className="text-secondary" />
      {/* Product section */}
      <section className="my-5">
        <div className="container mx-auto">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <h1 className="fw-bold">Support</h1>
              <p className="my-3 fw-semibold headline headline">
                We provide technical assistance, that will help you to improve,
                keep the quality and speed of the launched project like website,
                app or full product.
              </p>
              <div className="row">
                <div className="col-lg-5 my-lg-5 my-3">
                  <h1>What we do</h1>
                  <p className="fw-semibold headline mt-lg-3">
                    - Content Strategy & Research
                  </p>
                  <p className="fw-semibold headline">- Branding Strategy</p>
                  <p className="fw-semibold headline">- Opportunity Analysis</p>
                </div>
                <div className="col-lg-5 my-lg-5">
                  <p className="fw-semibold headline mt-lg-5 pt-lg-3">
                    - Content Strategy
                  </p>
                  <p className="fw-semibold headline">- Strategic Planning</p>
                  <p className="fw-semibold headline">- Production Planning</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <img src={Service4} className="w-50"/>
            </div>
          </div>
        </div>
      </section>
      <hr className="text-secondary" />
      {/* footer section */}
      <section className="bg-white py-3 py-lg-5 ">
        <div className="container mx-auto">
          <div className="row my-5">
            <div className="col text-center">
              <h5 className="fw-semibold text-secondary mt-3">Next</h5>
              <h1 className="fw-bold mt-3">Our Contact</h1>
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

export default Service;
