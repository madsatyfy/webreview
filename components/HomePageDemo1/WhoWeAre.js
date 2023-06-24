import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about/about.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>
                  We Are <b>All In One</b> IT Solution & Technology Company
                </h3>
                <p>
                Welcome to our world at <strong>TheDevelopersEnd</strong>, where 
                we embody the essence of being an all-in-one IT solution and 
                technology company.
                With a comprehensive suite of services, we strive to meet all your
                business's technological needs under one roof.
                </p>
                <p>
                From web development and mobile applications to cloud solutions and
                cybersecurity, we offer a holistic approach to help you thrive in the
                digital landscape. Our team of experts combines technical prowess with
                creative thinking to deliver innovative solutions that drive your business forward.
                </p>
                <div className="about-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src="/images/about/about-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
