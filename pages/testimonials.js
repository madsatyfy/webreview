import React from "react";
import Link from "next/link";
// import NavbarTwo from '@/components/Layout/NavbarTwo'
import Footer from "@/components/Layout/Footer";

export default function Testimonials() {
  return (
    <>
      {/* <NavbarTwo /> */}

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-5.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Testimonials</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="testimonials-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>TESTIMONIALS</span>
            <h2>Our Client Feedbacks</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <p>
                  "TheDevelopersEnd has transformed our online presence with
                  their exceptional SEO strategies. Our website now ranks high
                  in search results, driving a significant increase in organic
                  traffic and conversions. Their expertise and dedication have
                  truly made a difference for our business."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-4.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Bradly Doe, <span>Founder of Medizo</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <p>
                  "The creative brilliance of TheDevelopersEnd's graphic design
                  team has exceeded our expectations. They have brought our
                  brand to life with visually stunning designs that captivate
                  our audience. Their attention to detail and ability to
                  understand our vision have made them our go-to partner for all
                  our design needs."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-6.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Jennifer Smith, <span>Spix Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <p>
                  "Working with TheDevelopersEnd on our mobile app was a
                  seamless experience. Their skilled app development team
                  delivered a user-friendly and feature-rich application that
                  perfectly aligns with our business objectives. Their
                  professionalism, communication, and technical expertise have
                  made them our trusted app development partner."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-8.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Jane Ronan, <span>Lebu Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <p>
                  "TheDevelopersEnd has taken our website to the next level with
                  their exceptional web development services. They have created
                  a visually appealing and highly functional website that
                  perfectly represents our brand. Their expertise in responsive
                  design, seamless navigation, and customized solutions has
                  exceeded our expectations."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-5.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Daniel John, <span>Solit Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <p>
                  "We are extremely impressed with TheDevelopersEnd's expertise
                  in blockchain technology. Their comprehensive understanding
                  and implementation of blockchain solutions have revolutionized
                  our business processes, ensuring transparency, security, and
                  efficiency. Their guidance and support have been invaluable on
                  our blockchain journey."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-7.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Sarp Karahan, <span>Benzo Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <p>
                  "TheDevelopersEnd has opened up a whole new world of
                  possibilities for our brand through NFTs. Their in-depth
                  knowledge and creative approach have enabled us to explore the
                  exciting realm of digital collectibles. With their expertise,
                  we have successfully launched unique NFT projects that have
                  captured the attention of our audience."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Johny Smith, <span>Solit Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
