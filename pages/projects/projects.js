import React from 'react'
import Link from 'next/link'
// import NavbarTwo from '@/components/Layout/NavbarTwo'
import CTO from '@/components/Common/CTO'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Layout/Footer'

export default function Projects() {
  return (
    <>
      {/* <NavbarTwo /> */}

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-3.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            {/* <h2>Projects</h2> */}
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>PortFolio</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projects-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2>
               Our <b>Portfolio</b> Includes  
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
                  <Link href="/projects/projects-details1">
                    <a>
                      <img
                        src="/images/projects-two/projects-1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/projects-details1">
                      <a>Graphic Design</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details1">
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
                  <Link href="/projects/projects-details3">
                    <a>
                      <img
                        src="/images/projects-two/projects-2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/projects-details3">
                      <a>Blockchain</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details3">
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
                  <Link href="/projects/projects-details6">
                    <a>
                      <img
                        src="/images/projects-two/projects-3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/projects-details6">
                      <a>Website Development</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details6">
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
                  <Link href="/projects/projects-details7">
                    <a>
                      <img
                        src="/images/projects-two/projects-4.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/projects-details7">
                      <a>App Development</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details7">
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
                  <Link href="/projects/projects-details2">
                    <a>
                      <img
                        src="/images/projects-two/projects-5.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <h3>
                    <Link href="/projects/projects-details2">
                      <a>ERP Software</a>
                    </Link>
                  </h3>
                  <Link href="/projects/projects-details2">
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

      <CTO />

      <ContactForm />

      <Footer />
    </>
  )
}
