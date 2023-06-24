import React from "react";
import Link from "next/link";

const ProjectsCard = () => {
  return (
    <>
      <div className="projects-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              <b>Services</b> We Provide includes :
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/projects-details">
                    <a>
                      <img
                        src="/images/projects-two/projects-1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Graphic Design</a>
                  </Link>
                  <h3>
                    <Link href="/projects/projects-details">
                      <a>Graphic Design</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>

              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/projects-details">
                    <a>
                      <img
                        src="/images/projects-two/projects-2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Software</a>
                  </Link>
                  <h3>
                    <Link href="/projects/projects-details">
                      <a>Online Banking Software</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/projects-details">
                    <a>
                      <img
                        src="/images/projects-two/projects-3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Web 3 </a>
                  </Link>
                  <h3>
                    <Link href="/projects/projects-details">
                      <a>NFT Marketplace</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/projects-details">
                    <a>
                      <img
                        src="/images/projects-two/projects-4.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Mobile App</a>
                  </Link>
                  <h3>
                    <Link href="/projects/projects-details">
                      <a>Messaging App</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>

              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/projects-details">
                    <a>
                      <img
                        src="/images/projects-two/projects-5.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Development</a>
                  </Link>
                  <h3>
                    <Link href="/projects/projects-details">
                      <a>Analytics Software</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-bg-shape-1">
          <img src="/images/projects/projects-bg-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
