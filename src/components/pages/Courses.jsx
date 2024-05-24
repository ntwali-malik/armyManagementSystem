import React from "react";
import BreadCrumps from "../BreadCrumps";

function Courses() {
  return (
    <div>
      <BreadCrumps page="Courses" title="All Courses" />
      <section class="w3l-courses">
        <div class="blog pb-5" id="courses">
          <div class="container py-lg-5 py-md-4 py-2">
            <div class="row">
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
              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/training4.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div class="post-pos">
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                    <p>Required</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                    Special Forces Tactics
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 12 weeks </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 20 soldiers </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/training4.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Captain Rodriguez</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Special Forces</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/training4.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div class="post-pos">
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                    <p>Required</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                    Cybersecurity Essentials
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 10 weeks </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 25 soldiers </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/training5.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Lieutenant Smith</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Cybersecurity</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/training6.jpg"
                        alt="Card cap"
                      />
                    </a>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                    <p>Required</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                    Leadership and Command
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 16 weeks </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 15 soldiers </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/training6.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Colonel Johnson</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Leadership</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* pagination */}
            <div class="pagination-wrapper mt-5 pt-lg-3 text-center">
              <ul class="page-pagination">
                <li>
                  <a class="next" href="#url">
                    <span class="fa fa-angle-left"></span> Prev
                  </a>
                </li>
                <li>
                  <span aria-current="page" class="page-numbers current">
                    1
                  </span>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    2
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    3
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    ....
                  </a>
                </li>
                <li>
                  <a class="next" href="#url">
                    Next <span class="fa fa-angle-right"></span>
                  </a>
                </li>
              </ul>
            </div>
            {/* //pagination */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
