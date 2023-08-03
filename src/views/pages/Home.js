import { Link } from "react-router-dom";
import Img_Home from "../../assets/img/digital.png";
import Service1 from "../../assets/img/our_service_1 1.png";
import Service2 from "../../assets/img/our_service_2 1.png";
import Service3 from "../../assets/img/our_service_3.png";
import Service4 from "../../assets/img/our_service_4 1.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Home = (props) => {
  const Works = [
    { id: 1, src: [Img_Home], subtitle: "sportbooks", desc: "Rewind" },
    { id: 2, src: [Img_Home], subtitle: "sportbooks", desc: "Rewind" },
    { id: 3, src: [Img_Home], subtitle: "sportbooks", desc: "Rewind" },
    { id: 4, src: [Img_Home], subtitle: "sportbooks", desc: "Rewind" },
    { id: 5, src: [Img_Home], subtitle: "sportbooks", desc: "Rewind" },
    { id: 6, src: [Img_Home], subtitle: "sportbooks", desc: "Rewind" },
  ];

  const Services = [
    { id: 1, src: [Service1], subtitle: "Research & Analysis" },
    { id: 2, src: [Service2], subtitle: "Research & Analysis" },
    { id: 3, src: [Service3], subtitle: "Research & Analysis" },
    { id: 4, src: [Service4], subtitle: "Research & Analysis" },
  ];

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
      {/* Home section */}
      <section className="my-5">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-normal mt-5">Digital Agency</h1>
              <h1 className="fw-semibold mt-5 headline">
                We developer conplex interface systems <br /> for Web , Mobile &
                Ar
              </h1>
              <img src={Img_Home} className="img-fluid mt-5" />
            </div>
          </div>
        </div>
      </section>
      {/* work section */}
      <section className="bg-light py-5">
        <div className="container mx-auto">
          <div className="row">
            <div className="col">
              <h3 className="fw-semibold text-center my-5">
                Our Work Select Projects
              </h3>
              <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-3">
                {Works.map((work) => {
                  return (
                    <div>
                      <div key={work.id} className="col headline">
                        <div className="card border-0 shadow">
                          <img src={work.src} className="card-img-top" />
                          <div className="card-body">
                            <p className="card-text fw-bold text-secondary">
                              {work.subtitle}
                            </p>
                            <h5 className="card-title fw-bold">{work.desc}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <h6 className="fw-semibold my-5 mx-3">MORE CASE</h6>
                <button className="btn btn-secondary bg-white border-0 rounded-circle shadow">
                  <i className="fa-solid fa-angle-right text-black"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sevice section */}
      <section className="bg-light py-3">
        <div className="container mx-auto">
          <div className="row justify-content-between my-5">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h1 className="fw-semibold">Our Services</h1>
            </div>
            <div className="col-lg-6">
              <h5 className="fw-fold">
                As a strategic partner, we create a working product with a
                thoughtful and large-scale architecture. We launch, support and
                development.
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-3">
                {Services.map((service) => {
                  return (
                    <div>
                      <div key={service.id} className="col headline">
                        <div className="card border-0 shadow">
                          <div className="text-center">
                            <img
                              src={service.src}
                              className="card-img-top w-50 py-5"
                            />
                          </div>
                          <div className="card-body">
                            <p className="card-text fw-bold text-center">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <h6 className="fw-semibold my-5 mx-3">EXPLORE MORE</h6>
                <button className="btn btn-secondary bg-white border-0 rounded-circle shadow">
                  <i className="fa-solid fa-angle-right text-black"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section className="bg-white py-3 py-lg-5">
        <div className="container mx-auto">
          <div className="row my-5">
            <div className="col text-center">
              <h5 className="fw-semibold text-secondary">Next</h5>
              <Link
                to="story"
                className="fw-semibold text-black text-decoration-none mx-3"
              >
                <h1 className="fw-bold">Our Story</h1>
              </Link>
              <i className="fa-solid fa-arrow-right fs-3"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
