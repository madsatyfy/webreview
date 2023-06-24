import React from "react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-section-content"
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>TESTIMONIALS</span>
                <h3>
                  Some <b>Sweet Talk</b> Of Our Happy Clients
                </h3>
                <p>
                  At TheDevelopersEnd, we take immense pride in the satisfaction
                  of our clients. Our commitment to delivering top-notch IT
                  solutions and exceptional customer service has garnered praise
                  and appreciation from businesses across various industries.
                  Here are a few glowing reviews from our delighted clients:
                </p>

                <div className="testimonials-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-item"
                data-aos="fade-left"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    "Working with TheDevelopersEnd has been an absolute
                    pleasure. They understood our requirements perfectly and
                    crafted a stunning website that exceeded our expectations.
                    Their attention to detail, timely delivery, and ongoing
                    support truly set them apart."
                  </p>
                  <h4>
                    Herry Hopper, <span>Solit Team</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    "TheDevelopersEnd transformed our online presence with their
                    SEO expertise. Thanks to their strategies, our website's
                    organic traffic has skyrocketed, resulting in significant
                    business growth. Their team's professionalism, transparency,
                    and dedication are truly commendable."
                  </p>
                  <h4>
                    Daniel John, <span>Spix Team</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-3.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    "We were in need of a robust mobile application for our
                    business, and TheDevelopersEnd delivered beyond our
                    imagination. The app's seamless performance, user-friendly
                    interface, and flawless functionality have greatly enhanced
                    our customer experience. They truly know how to bring ideas
                    to life."
                  </p>
                  <h4>
                    Zinnia, <span>Stax Team</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialsbg-shape">
          <img src="/images/testimonials/testimonials-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
