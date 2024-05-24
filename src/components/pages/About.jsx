import React from "react";
import BreadCrumps from "../BreadCrumps";
function About() {
  return (
    <div>
      <BreadCrumps page="About us" title="About Company" />
      <section id="about" className="home-services pt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-graduation-cap"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Mission</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                  To enhance the operational efficiency and effectiveness of
                  military operations through a comprehensive, integrated
                  management system that streamlines logistics, personnel, and
                  resource management.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-book"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Vision</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                  To be the leading provider of innovative management solutions
                  that empower military forces with real-time data and advanced
                  analytics for superior strategic planning and execution.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-trophy"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Goal</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                  To ensure seamless coordination and optimal resource
                  utilization in all military operations by delivering a
                  user-friendly, robust, and reliable management system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-aboutblock1 py-5" id="about">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self">
              <span className="title-small mb-2">About Us</span>
              <h3 className="title-big mx-0">
                Welcome to the Army Management System - streamlining all
                military operations and resources.
              </h3>
              <p className="mt-lg-4 mt-3">
                Our platform ensures efficient logistics and personnel
                management, empowering military forces with precision and
                reliability.
              </p>
              <p className="mt-3 mb-lg-5">
                Efficient, reliable, and user-friendly, our system ensures
                seamless coordination and optimal resource management for
                superior operational success.
              </p>
            </div>
            <div className="col-lg-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/army5.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="w3l-servicesblock w3l-servicesblock1 py-5"
        id="progress"
      >
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self pr-lg-4">
              <div className="progress-info info1">
                <h6 className="progress-tittle">
                  Operational Readiness <span className="">80%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2">
                <h6 className="progress-tittle">
                  Mission Planning Efficiency <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info3">
                <h6 className="progress-tittle">
                  Logistics and Resource Management{" "}
                  <span className="">90%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info4">
                <h6 className="progress-tittle">
                  Personnel Tracking Accuracy <span className="">75%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2 mb-0">
                <h6 className="progress-tittle">
                  Combat-Ready Deployment <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
              <span className="title-small mb-2">Progress bars</span>
              <h3 className="title-big">
                {" "}
                Discover Our Popular Military Training Modules
              </h3>
              <p className="mt-md-4 mt-3">
                Optimize your military operations with streamlined logistics and
                resource allocation. Our system ensures seamless coordination
                and superior strategic planning for mission success.
              </p>
              <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">
                Get started now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-block py-5" id="">
        <div className="container py-lg-5 py-md-3">
          <div className="row">
            <div className="col-lg-6 about-right-faq align-self">
              <span className="title-small mb-2">
                Initiate Military Training Online
              </span>
              <h3 className="title-big mx-0">
                {" "}
                Elevate Your Expertise with Top-Notch Military Training Programs
              </h3>
              <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">
                nsure seamless coordination and optimal resource utilization in
                military operations. Our system empowers you to streamline
                logistics and personnel management for mission success.
              </p>
              <div className="two-grids mt-md-0 mt-md-5 mt-4">
                <div className="grids_info">
                  <h4>Combat Readiness Accreditation</h4>
                  <p className="">
                    Empowering military personnel with streamlined logistics and
                    advanced management systems for enhanced operational
                    efficiency.
                  </p>
                </div>
                <div className="grids_info">
                  <h4>Resources and Archives</h4>
                  <p className="">
                    Access a vast repository of military knowledge and
                    literature to enhance strategic planning and operational
                    readiness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/training2.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
            <div className="col-lg-3 col-6  left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/training3.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* stats */}
      <section className="w3l-stats py-5" id="stats">
        <div className="gallery-inner container py-lg-5 py-md-4">
          <span className="title-small text-center mb-1">Our Progress in Action</span>
          <h3 className="title-big text-center mb-5">
          Advancing Towards Excellence
          </h3>
          <div className="row stats-con">
            <div className="col-md-3 col-6 stats_info counter_grid">
              <p className="counter">500 </p>
              <span className="plus">+</span>
              <br />
              <h3>Troops Engaged</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid1">
              <p className="counter">56</p>
              <span className="plus">+</span>
              <br />
              <h3>Operational Units Managed</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
              <p className="counter">130</p>
              <span className="plus">k</span>
              <br />
              <h3>Missions Executed</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
              <p className="counter">243 </p>
              <span className="plus">+</span>
              <br />
              <h3>Strategic Advisors </h3>
            </div>
          </div>
        </div>
      </section>
      {/* //stats */}
    </div>
  );
}

export default About;
