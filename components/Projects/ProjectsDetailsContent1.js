import React from "react";

const ProjectsDetailsContent1 = () => {
  return (
    <>
      <div>
        <h3 style={{ paddingTop: "20px", textAlign: "center" }}>
          Welcome to our Graphic Design Services Page!🎨
        </h3>
        <div>
          <p style={{ textAlign: "center" }}>
            At <b>TheDevelopersEnd</b>, we specialize in providing top-notch
            graphic design solutions that captivate, engage, and leave a lasting
            impression.<br></br> Our team of skilled designers is well-versed in
            various creative disciplines, ensuring we deliver exceptional
            results across multiple domains.
          </p>
        </div>
      </div>
      <div className="projects-details-area ptb-50">
        <div className="container">
          <div className="projects-details-desc">
            <div className="article-projects-with-info">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                  <div className="projects-info-image">
                    <img
                      src="/images/projects-details/projects-details-1.jpg"
                      alt="image"
                    />

                    <div className="info-shape">
                      <img
                        src="/images/projects-details/circle-shape.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6">
                  <div className="projects-info-content">
                    {/* <span>PROJECT DETAILS</span> */}
                    <h3 style={{ paddingBottom: "50px" }}>UI/UX Design</h3>
                    <p>
                      Our UI/UX design services focus on creating intuitive and
                      engaging user experiences. We meticulously craft user
                      interfaces that are not only visually appealing but also
                      seamlessly functional, ensuring optimal usability and
                      customer satisfaction. From wireframing to prototyping, we
                      prioritize user-centric design to elevate your digital
                      products and platforms.
                    </p>
                    {/* <ul className="info-list">
                      <li>
                        <span>Category:</span> App Development
                      </li>
                      <li>
                        <span>Client:</span> Solit IT Group
                      </li>
                      <li>
                        <span>Duration:</span> August 2020 - January 2022
                      </li>
                      <li>
                        <span>Location:</span> Australia
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="article-projects-content ptb-50">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="content">
                    <h3>NFT Design</h3>
                    <p>
                      As the NFT (Non-Fungible Token) market continues to
                      flourish, our designers are well-versed in creating
                      captivating and unique digital assets that stand out in
                      the blockchain ecosystem. We specialize in designing NFT
                      artwork, collectibles, and digital assets that captivate
                      audiences and enhance the value of your NFT offerings.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="image">
                    <img
                      src="/images/projects-details/projects-details-2.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="article-projects-content ptb-50">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="image">
                    <img
                      src="/images/projects-details/projects-details-4.jpeg"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="content">
                    <h3>Logo Design</h3>
                    <p>
                      A powerful logo is the cornerstone of any successful
                      brand. Our logo design services focus on creating
                      impactful visual representations of your brand's identity.
                      We collaborate closely with you to understand your brand
                      values and goals, and then translate them into a memorable
                      and visually striking logo that resonates with your target
                      audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="article-projects-content ptb-50">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="content">
                    <h3>Social Media Graphics</h3>
                    <p>
                      Stand out on social media with eye-catching graphics that
                      grab attention and engage your followers. We create
                      custom-designed social media graphics that align with your
                      brand's tone and style, making your social media presence
                      visually appealing and on-point.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="image">
                    <img
                      src="/images/projects-details/projects-details-5.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="article-projects-quote">
              <i className="ri-double-quotes-l"></i>
              <p>
                Ready to take your brand's visual appeal to the next level? Get
                in touch with us today to discuss your graphic design
                requirements and let us bring your vision to life.
              </p>

              <div className="quote-shape">
                <img
                  src="/images/projects-details/circle-shape.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="article-projects-text">
              <p></p>
            </div>
          </div>
        </div>

        <div className="projects-details-shape">
          <img src="/images/projects-details/line-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default ProjectsDetailsContent1;
