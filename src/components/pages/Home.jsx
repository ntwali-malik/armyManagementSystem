import React from "react";

function Home() {
  return (
    <div>
      {/* main-slider */}
      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <div className="owl-one owl-carousel owl-theme">
            <div className="item">
              <li>
                <div className="slider-info banner-view bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>All Essential Training Programs</h5>
                        <p className="mt-4 pr-lg-4">
                          Take the first step on your mission to excellence with
                          us
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="/about"
                        >
                          Ready to get started?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info  banner-view banner-top1 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>
                          Enhance Your Skills and Readiness in Record Time
                        </h5>
                        <p className="mt-4 pr-lg-4">
                          Our self-improvement courses are highly effective
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="/about"
                        >
                          Ready to get started?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top2 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>
                          Boost Your Efficiency to Achieve Greater Success
                        </h5>
                        <p className="mt-4 pr-lg-4">
                          Don't waste your time, explore our efficient training
                          programs
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="/about"
                        >
                          Ready to get started?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top3 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>
                          Enhance Your Skills with Top-Rated Online Courses
                        </h5>
                        <p className="mt-4 pr-lg-4">
                          Take the first step on your journey to success with us
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="/about"
                        >
                          Ready to get started?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>

        <div className="waveWrapper waveAnimation">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
              d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none" }}
            ></path>
          </svg>
        </div>
      </section>
      {/* /main-slider */}
      <section className="w3l-courses">
        <div className="blog pb-5" id="courses">
          <div className="container py-lg-5 py-md-4 py-2">
            <h5 className="title-small text-center mb-1">
              Join Our Learning Courses
            </h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">
              Welcome <span>Join Us</span>
            </h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 item">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/training1.jpg"
                        alt="Training Image"
                      />
                    </a>
                    <div className="post-pos"></div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                      <p>Required</p>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Military Operations
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value">4 weeks</span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o"></span>
                        <span className="meta-value">100 soldiers</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/trainer1.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">Instructor:</span>{" "}
                          <a href="#instructor">Sergeant Smith</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">Category:</span>{" "}
                          <a href="#training-category">Basic Training</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/training2.jpg"
                        alt="Training Image"
                      />
                    </a>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>Required</p>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Urban Warfare Techniques
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value">6 weeks</span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o"></span>
                        <span className="meta-value">50 soldiers</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/trainer2.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">Instructor:</span>{" "}
                          <a href="#instructor">Lieutenant Johnson</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">Category:</span>{" "}
                          <a href="#training-category">Advanced Training</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/training3.jpg"
                        alt="Training Image"
                      />
                    </a>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>Required</p>
                    </div>
                    <a href="#course-single" className="course-desc">
                      Counterterrorism Operations
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value">8 weeks</span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o"></span>
                        <span className="meta-value">30 soldiers</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/trainer3.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">Instructor:</span>{" "}
                          <a href="#instructor">Major Thompson</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">Category:</span>{" "}
                          <a href="#training-category">Counterterrorism</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 text-more">
              <p className="pt-md-3 sample text-center">
                Manage your notification preferences to stay updated on relevant
                training programs
                <a href="courses.html">
                  Explore All Training Programs
                  <span className="pl-2 fa fa-long-arrow-right"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-features py-5" id="facilities">
        <div className="call-w3 py-lg-5 py-md-4 py-2">
          <div className="container">
            <div className="row main-cont-wthree-2">
              <div className="col-lg-5 feature-grid-left">
                <h5 className="title-small mb-1">Training and Graduation</h5>
                <h3 className="title-big mb-4">Our Training Facilities </h3>
                <p className="text-para">
                  Streamline your training and graduation procedures for optimal
                  efficiency. We provide comprehensive support, ensuring smooth
                  transitions and effective learning experiences. Your success
                  is our priority, from start to finish.
                </p>
                <p className="mt-3">
                  Embrace challenges and seize opportunities to grow. Every
                  obstacle you overcome, every lesson you learn, fuels your
                  journey toward success. Embrace the journey with determination
                  and resilience, for it is in facing adversity that we discover
                  our true strength and potential. Your perseverance will pave
                  the way for triumph. Keep moving forward with unwavering
                  confidence.
                </p>
                <a
                  href="#url"
                  className="btn btn-primary btn-style mt-md-5 mt-4"
                >
                  Discover More
                </a>
              </div>
              <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                <div className="call-grids-w3 d-grid">
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-certificate"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Military Recognition
                      </a>
                    </h4>
                    <p>
                      Earn commendation from military authorities worldwide.
                      Your dedication and expertise are acknowledged and
                      respected on an international scale.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-book"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Military Resources & Archives
                      </a>
                    </h4>
                    <p>
                      Access a wealth of military knowledge and historical
                      archives
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-trophy"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Military Scholarship Programs
                      </a>
                    </h4>
                    <p>
                      Explore opportunities for educational advancement through
                      military scholarship programs.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-graduation-cap"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Military Alumni Support
                      </a>
                    </h4>
                    <p>
                      Benefit from a strong network of military alumni support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w3l-homeblock3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <h5 className="title-small text-center mb-1">From the news</h5>
          <h3 className="title-big text-center mb-sm-5 mb-4">
            Latest
            <span>News</span>
          </h3>
          <div className="row top-pics">
            <div className="col-md-6">
              <div className="top-pic1">
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                    Elevate your military expertise and enhance your operational
                    experience with specialized online courses designed for
                    servicemen and women like you.
                  </a>
                  <div className="author align-items-center">
                    <img
                      src="assets/images/trainer1.jpg"
                      alt="blogs"
                      className="img-fluid rounded-circle"
                    />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Captain Ivan</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value"> Nov 19, 2023 </span>.
                        <span className="meta-value ml-2">
                          <span className="fa fa-clock-o"></span>1 min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
              <div className="top-pic2">
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                    Boost your military productivity for greater success. Embark
                    on your first mission with confidence.
                  </a>
                  <div className="author align-items-center">
                    <img
                      src="assets/images/trainer2.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Major Harry</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value">Nov 19, 2023 </span>.
                        <span className="meta-value ml-2">
                          <span className="fa fa-clock-o"></span>1 min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="top-pic3">
                  <div className="card-body blog-details">
                    <a href="#blog-single" className="blog-desc">
                      Enhance your military skills with our highly effective
                      self-improvement courses. Begin your online learning
                      journey today.
                    </a>
                    <div className="author align-items-center">
                      <img
                        src="assets/images/trainer3.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <a href="#author">Lt Maliki</a>
                        </li>
                        <li className="meta-item blog-lesson">
                          <span className="meta-value">Nov 19, 2023</span>.
                          <span className="meta-value ml-2">
                            <span className="fa fa-clock-o"></span>1 min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-md-5 mt-4 text-more text-center">
            <a href="blog.html">
              View All Posts
              <span className="pl-2 fa fa-long-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
      {/* //middle */}
      <section className="w3l-team py-5" id="team">
        <div className="call-w3 py-lg-5 py-md-4">
          <div className="container">
            <div className="row main-cont-wthree-2">
              <div className="col-lg-5 feature-grid-left">
                <h5 className="title-small mb-1">Seasoned Veterans</h5>
                <h3 className="title-big mb-4">Meet Our Instructors</h3>
                <p className="text-para">
                  Our instructors are highly experienced military professionals.
                  They bring a wealth of knowledge and expertise to every
                  training session, ensuring that you receive the best possible
                  education and preparation. Their dedication and commitment to
                  excellence are unmatched.
                </p>
                <p className="mt-3">
                  From combat strategies to leadership skills, our instructors
                  cover a wide range of essential military training topics.
                  Their real-world experience and practical insights will equip
                  you with the skills needed to excel in your military career.
                  Join us and learn from the best in the field.
                </p>
                <a
                  href="#url"
                  className="btn btn-primary btn-style mt-md-5 mt-4"
                >
                  Discover More
                </a>
              </div>
              <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/instructor2.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Major James</a>
                        </h3>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-sm-0 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/instructor1.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Lt Ivan</a>
                        </h3>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-lg-4 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/instructor3.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Col. Eric</a>
                        </h3>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-lg-4 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/instructor4.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Lt. Elizabeth</a>
                        </h3>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="w3l-testimonials" id="clients">
        {/* /grids */}
        <div className="cusrtomer-layout py-5">
          <div className="container py-lg-4 py-md-3 pb-lg-0">
            <h5 className="title-small text-center mb-1">Testimonials</h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">
              Happy Clients & Feedbacks
            </h3>
            {/* /grids */}
            <div className="testimonial-width">
              <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team1.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>John wilson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team2.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Julia sakura</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team3.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Roy Linderson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team4.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Mike Thyson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team2.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Laura gill</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team3.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Smith Johnson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team2.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Laura gill</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Lorem ipsum dolor sit amet elit. Velit beatae
                          laudantium voluptate rem ullam dolore nisi
                          voluptatibus esse quasi, doloribus tempora. Dolores
                          molestias adipisci dolo amet!.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team3.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Smith Johnson</h3>
                          <p className="indentity">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /grids */}
        </div>
        {/* //grids */}
      </section>
      {/* //testimonials */}
      <section className="w3l-clients py-5" id="clients">
        <div className="call-w3 py-md-4 py-2">
          <div className="container">
            <div className="company-logos text-center">
              <div className="row logos">
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                  <img
                    src="assets/images/brand4.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                  <img
                    src="assets/images/brand5.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                  <img
                    src="assets/images/brand6.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
