import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-tilt>
                <img
                  src="/images/about/about-2.png"
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
                <h3>We Are All In One IT Solution & Technology Company</h3>
                <p>
                  At TheDevelopersEnd, we are driven by our passion for
                  technology and a genuine desire to see businesses thrive. We
                  are dedicated to building long-term relationships with our
                  clients, based on trust, transparency, and mutual success.
                </p>
                <p>
                  Our team of skilled professionals is always ready to go above
                  and beyond to exceed client expectations and deliver
                  exceptional IT solutions that drive real business impact.
                </p>
                <p>
                  Join us at TheDevelopersEnd and let's embark on a journey
                  together to unlock the full potential of technology for your
                  business. Experience the power of innovation, expertise, and
                  unwavering commitment to your success.
                </p>
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
