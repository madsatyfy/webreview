import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <>
      <div className="services-area with-radius ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>SERVICES</span>
                <h3>
                  We Provide the Best Quality <b>Services</b>
                </h3>
                <div className="services-section-btn">
                  <Link href="/services/services">
                    <a className="default-btn">Explore All Services</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper services-slides"
              >
                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/services">
                        <a>
                          <img
                            src="/images/services/services-1.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/services">
                          <a>Software Development</a>
                        </Link>
                      </h3>
                      <p>
                      The art of transforming ideas into powerful,
                      functional, and scalable digital solutions.
                      </p>
                      <Link href="/services/services">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/services">
                        <a>
                          <img
                            src="/images/services/services-2.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/services">
                          <a>App Development</a>
                        </Link>
                      </h3>
                      <p>
                      Unleashing the potential of technology
                      to create innovative and seamless mobile experiences.
                      </p>
                      <Link href="/services/services">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/services">
                        <a>
                          <img
                            src="/images/services/services-3.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/services">
                          <a>Web Development</a>
                        </Link>
                      </h3>
                      <p>
                      Web Development isa mode which Turning ideas into
                      dynamic websites for digital success.
                      </p>
                      <Link href="/services/services">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/services">
                        <a>
                          <img
                            src="/images/services/services-4.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/services">
                          <a>Analytic Solutions</a>
                        </Link>
                      </h3>
                      <p>
                      Anaylisation of ideas and
                      Harnessing data to empower your business with actionable intelligence.
                      </p>
                      <Link href="/services/services">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
