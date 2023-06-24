import React from "react";

const OurGoal = () => {
  return (
    <>
      <div className="about-area pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-wrap-image" data-tilt>
                <img
                  src="/images/about/about-5.jpg"
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
                className="about-wrap-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
                style={{ paddingBottom: "115px" }}
              >
                <span style={{ fontSize: "42px" }}>OUR GOAL</span>
                <p>
                  At TheDevelopersEnd, our goal is to be the driving force
                  behind your digital success. We are a leading IT services
                  company dedicated to providing innovative solutions that
                  empower businesses to thrive in the ever-evolving
                  technological landscape.
                </p>
                <p>
                  With a team of skilled professionals and a passion for
                  cutting-edge technology, we are committed to delivering
                  top-notch IT services that cater to your unique business
                  needs. Our expertise spans across a wide range of domains,
                  including web development, mobile applications, cloud
                  solutions, cybersecurity, graphic design, and blockchain.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <h3>Our Vision</h3>
                  <p>
                    Our vision is to create a transformative impact through
                    technology. We envision a future where businesses harness
                    the power of cutting-edge IT solutions to unlock their full
                    potential and achieve remarkable success. We strive to be at
                    the forefront of technological advancements, driving
                    innovation, and enabling businesses to navigate the
                    ever-evolving digital landscape with confidence.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to empower businesses by providing
                    exceptional IT services that combine technical excellence,
                    strategic thinking, and a customer-centric approach. We are
                    committed to understanding the unique needs of each client
                    and tailoring our solutions to help them overcome
                    challenges, optimize operations, and achieve their goals.
                    With a focus on innovation, reliability, and continuous
                    improvement, we aim to deliver measurable results that make
                    a real difference for our clients.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="card-image" data-tilt>
                    <img src="/images/about/about-4.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-circle-shape">
          <img src="/images/about/about-circle.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default OurGoal;
