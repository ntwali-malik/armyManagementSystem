import React from "react";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      {/* footer */}
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-md-4">
            <div className="row footer-top-29">
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                <h6 className="footer-title-29">Contact Info </h6>
                <p>
                  Address : KIGALI, Rwanda
                </p>
                <p className="my-2">
                  Phone : <a href="tel:+1(21) 234 4567">+250780000000</a>
                </p>
                <p>
                  Email : <a href="mailto:info@example.com">info@example.com</a>
                </p>
                <div className="main-social-footer-29 mt-4">
                  <a href="#facebook" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                  <a href="#twitter" className="twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                  <a href="#instagram" className="instagram">
                    <span className="fa fa-instagram"></span>
                  </a>
                  <a href="#linkedin" className="linkedin">
                    <span className="fa fa-linkedin"></span>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">
                <ul>
                  <h6 className="footer-title-29">Army System</h6>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="#blog"> Latest Blog posts</a>
                  </li>
                  <li>
                    <a href="#teacher"> Wants To Join Army</a>
                  </li>
                  <li>
                    <a href="courses.html">Courses</a>
                  </li>
                  <li>
                    <a href="contact.html">Get in touch</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Programs</h6>
                <ul>
                  <li>
                    <a href="#traning">Training Center</a>
                  </li>
                  <li>
                    <a href="#documentation">Documentation</a>
                  </li>
                  <li>
                    <a href="#release">Release Status</a>
                  </li>
                  <li>
                    <a href="#customers"> Customers</a>
                  </li>
                  <li>
                    <a href="#helpcenter"> Help Center</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Suppport</h6>
                <a href="#playstore">
                  <img
                    src="assets/images/googleplay.png"
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <a href="#appstore">
                  <img
                    src="assets/images/appstore.png"
                    className="img-responsive mt-3"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <section className="w3l-copyright text-center">
          <div className="container">
            <p className="copy-footer-29">
              © 2020 Maliki and Ivan
            </p>
          </div>

          {/* move top */}
          <button onClick={topFunction} id="movetop" title="Go to top">
            &#10548;
          </button>

          {/* /move top */}
        </section>
        {/* //copyright */}
      </section>
      {/* //footer */}
    </div>
  );
}

export default Footer;
