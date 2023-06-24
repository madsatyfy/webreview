import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const ProjectSlider = () => {
  return (
    <>
      <div className="projects-area with-black-background pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
            <b>Services</b> We Provide includes:
            </h2>
          </div>

          <div className="px-3 text-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
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
                1200: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper projects-slides"
            >
              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="/projects/projects-details1">
                      <a>
                        <img
                          src="/images/projects/projects-1.jpg"
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
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="/projects/projects-details2">
                      <a>
                        <img
                          src="/images/projects/projects-2.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link nk href="/projects/projects-details2">
                        <a>ERP Software</a>
                      </Link>
                    </h3>
                    <Link href="/projects/projects-details2">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="/projects/projects-details3">
                      <a>
                        <img
                          src="/images/projects/projects-3.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="/projects/projects-details3">
                        <a>Blockchain Technology</a>
                      </Link>
                    </h3>
                    <Link href="/projects/projects-details3">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="/projects/projects-details4">
                      <a>
                        <img
                          src="/images/projects/projects-4.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="/projects/projects-details4">
                        <a>IT Consultancy Services</a>
                      </Link>
                    </h3>
                    <Link href="/projects/projects-details4">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="90"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="/projects/projects-details5">
                      <a>
                        <img
                          src="/images/projects/projects-5.jpg"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="/projects/projects-details5">
                        <a>Social Media Management</a>
                      </Link>
                    </h3>
                    <Link href="/projects/projects-details5">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Shape Images */}
        <div className="projects-bg-shape-1">
          <img src="/images/projects/projects-bg-shape.png" alt="image" />
        </div>
        <div className="projects-shape-1">
          <img src="/images/projects/projects-shape-1.png" alt="image" />
        </div>
        <div className="projects-shape-2">
          <img src="/images/projects/projects-shape-2.png" alt="image" />
        </div>
        <div className="projects-shape-3">
          <img src="/images/projects/projects-shape-3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
