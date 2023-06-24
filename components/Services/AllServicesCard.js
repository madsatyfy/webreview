import React from "react";
import Link from "next/link";

const AllServicesCard = () => {
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/services/services-1.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/services">
                      <a>Blockchain Solutions</a>
                    </Link>
                  </h3>
                  <p>
                    Our blockchain solutions at TheDevelopersEnd harness the
                    power of decentralized technology to revolutionize
                    industries. With expertise in blockchain development and a
                    deep understanding of its transformative potential, we offer
                    cutting-edge solutions that enhance transparency, security,
                    and efficiency.
                  </p>
                  <Link href="/services/services">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/services/services-2.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/services">
                      <a>IT Consulting</a>
                    </Link>
                  </h3>
                  <p>
                    Our IT consulting services are designed to help businesses
                    navigate the complex world of technology and leverage it to
                    drive growth and achieve their goals. With our expertise and
                    industry insights, we provide strategic guidance and
                    actionable recommendations tailored to your specific needs.
                  </p>
                  <Link href="/services/services">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/services/services-3.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/services">
                      <a>Cloud Solutions</a>
                    </Link>
                  </h3>
                  <p>
                    We customise solutions to meet your unique demands by
                    utilising leading cloud platforms like <strong>AWS</strong> and <strong>GCP</strong>, via
                    optimisation We make sure your cloud environment is fully
                    optimised and secured, from resource allocation and
                    guaranteeing high availability to putting in place strong
                    security measures.
                  </p>
                  <Link href="/services/services">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/services/services-4.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/services">
                      <a>Digital Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    In today's digital age, having a strong online presence is
                    essential for businesses to thrive. At TheDevelopersEnd, we
                    specialize in digital marketing strategies and advanced
                    tools that harness the power of digital channels to boost
                    brand visibility, engage target audiences, and drive
                    measurable results.
                  </p>
                  <Link href="/services/services">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/services/services-5.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/services">
                      <a>Graphic Design</a>
                    </Link>
                  </h3>
                  <p>
                    At TheDevelopersEnd, our graphic design services are
                    tailored to visually communicate your brand's story,
                    captivate your audience, and leave a lasting impression.
                    With a keen eye for aesthetics and a passion for creativity,
                    our talented designers work closely with you to bring your
                    vision to life.
                  </p>
                  <Link href="/services/services">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/services">
                    <a>
                      <img src="/images/services/services-6.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/services">
                      <a>IT Support and Helpdesk Services</a>
                    </Link>
                  </h3>
                  <p>
                    In today's fast-paced digital landscape, businesses rely
                    heavily on technology to operate efficiently. But what
                    happens when technical issues arise or users face challenges
                    navigating their digital tools? That's where our
                    comprehensive IT Support and Helpdesk Services come to the
                    rescue!
                  </p>
                  <Link href="/services/services">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        {/* <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div> */}
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AllServicesCard;
