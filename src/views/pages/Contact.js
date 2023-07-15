import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Contact = (props) => {
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
      {/* contact section */}
      <section className="my-5 container mx-auto">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-normal mt-5 ">Wazup there</h1>
            <h1 className="fw-semibold mt-5 mt-lg-3 headline">
              We’re here for you, drop as a line
            </h1>
          </div>
          <div className="col-lg-8">
            <div className="form-box mt-5 pt-5">
              <div className="form-value">
                <form action="">
                  <div className="inputbox">
                    <input type="text" required />
                    <label className="fw-bold text-secondary fs-5">
                      New Business
                      <i className="fa-solid fa-arrow-right ms1-5"></i>
                    </label>
                  </div>
                  <div className="inputbox mt-5">
                    <input type="text" required />
                    <label className="fw-bold text-secondary fs-5">
                      Send a message
                      <i className="fa-solid fa-arrow-right ms2-5"></i>
                    </label>
                  </div>
                  <div className="inputbox mt-5">
                    <input type="text" required />
                    <label className="fw-bold text-secondary fs-5">
                      Careers
                      <i className="fa-solid fa-arrow-right ms3-5"></i>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section className="my-5 container mx-auto">
        <div className="row row-cols-lg-3 row-cols-1">
          <div className="col mt-3 mt-lg-0">
            <div className="card w-100 border-0">
              <div classNmae="card-body">
                <p className="text-secondary fs-6 text-center text-lg-start">General inquiries —</p>
                <h4 className="fw-bold text-center text-lg-start">Quick chat</h4>
                <h4 className="fs-6 text-secondary fw-semibold mt-3 text-center text-lg-start">
                  <i className="fa-brands fa-facebook-messenger text-black me-1 fs-5"></i>
                  Message on facebook
                </h4>
              </div>
            </div>
          </div>
          <div className="col mt-3 mt-lg-0">
            <div className="card w-100 border-0">
              <div classNmae="card-body">
                <p className="text-secondary fs-6 text-center text-lg-start">New business —</p>
                <h4 className="fw-bold text-center text-lg-start">hi@repohub.co</h4>
                <h4 className="fs-6 text-secondary fw-semibold mt-3 text-center text-lg-start">
                  +95 9 888 777 666
                </h4>
              </div>
            </div>
          </div>
          <div className="col mt-3 mt-lg-0">
            <div className="card w-100 border-0">
              <div classNmae="card-body">
                <p className="text-secondary fs-6  text-center text-lg-start">Office —</p>
                <h4 className="fw-bold  text-center text-lg-start">Yangon</h4>
                <h4 className="fs-6 text-secondary fw-semibold mt-3  text-center text-lg-start">
                  Yangon, Myanmar
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
