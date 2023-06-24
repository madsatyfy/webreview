import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span style={{ fontSize: "42px" }}>WHY CHOOSE US</span>
            <h2>
              With <b>TheDevelopersEnd:</b> "Ignite Your Business with IT
              Excellence!"
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/choose/choose-1.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/services">
                      <a>Mobile Apps</a>
                    </Link>
                  </h3>
                  <p>
                    We develop intuitive and user-friendly apps that streamline
                    processes and improve efficiency across various industries.
                    By eliminating unnecessary complexities and enhancing
                    productivity, we contribute to a more effective and
                    streamlined world.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/choose/choose-2.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/services">
                      <a>Web Development</a>
                    </Link>
                  </h3>
                  <p>
                    We offer comprehensive web development
                    services tailored to meet the unique needs of your business.
                    With a team of experienced developers and a deep
                    understanding of the latest industry trends, we create
                    engaging and high-performing websites that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/choose/choose-3.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/services">
                      <a>Graphic Design</a>
                    </Link>
                  </h3>
                  <p>
                    By leveraging the power of graphic design, we help
                    businesses establish a strong brand identity that
                    communicates their values and unique selling proposition.
                    Our designs evoke emotions, foster trust, and leave a
                    lasting imprint in the minds of customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/choose/choose-4.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/services">
                      <a>Search Optimization</a>
                    </Link>
                  </h3>
                  <p>
                    We employ strategic SEO techniques to optimize your website
                    and content, making it more visible to search engines. By
                    improving your organic search rankings, we ensure that your
                    business gets the exposure it deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="choose-shape-1">
          <img src="/images/choose/choose-shape.png" alt="image" />
        </div>
        <div className="choose-shape-2">
          <img src="/images/choose/choose-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
