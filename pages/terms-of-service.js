import React from "react";
import Link from "next/link";
// import NavbarTwo from '@/components/Layout/NavbarTwo'
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function TermsOfService() {
  return (
    <>
      {/* <NavbarTwo /> */}

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Terms of Service</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="terms-of-service-content">
                <div className="terms-of-service-image">
                  <img src="/images/terms-of-service.jpg" alt="image" />
                </div>
                <p>
                  <i>
                    Please read these Terms of Service carefully before
                    accessing or using the IT services provided by
                    TheDevelopersEnd. These Terms govern your use of our
                    services, and by accessing or using our services, you agree
                    to be bound by these Terms. If you do not agree with any
                    part of these Terms, you may not access or use our services.
                  </i>
                </p>
                <h3>
                  <span>1.</span> Service Description
                </h3>
                <p>
                  TheDevelopersEnd provides IT services, including but not
                  limited to web development, mobile app development, graphic
                  design, cybersecurity, and data analytics. Our services are
                  designed to meet your specific business requirements and are
                  subject to the terms and conditions outlined herein.
                </p>
                <h3>
                  <span>2.</span>Confidentiality
                </h3>
                <p>
                  We understand the importance of confidentiality when it comes
                  to your sensitive information. We will treat all confidential
                  information provided by you as strictly confidential and will
                  not disclose it to any third party without your prior written
                  consent, except as required by law.
                </p>
                <h3>
                  <span>3.</span> Intellectual Property
                </h3>
                <p>
                  The intellectual property rights for any software, code,
                  designs, graphics, or other materials developed or provided by
                  TheDevelopersEnd as part of the services remain the property
                  of TheDevelopersEnd unless otherwise agreed upon in writing.
                  Unauthorized use, reproduction, or distribution of any
                  intellectual property belonging to TheDevelopersEnd is
                  strictly prohibited.
                </p>
                <h3>
                  <span>4.</span> Project Scope and Timelines
                </h3>
                <p>
                  Any project scope, deliverables, timelines, and milestones
                  will be agreed upon in writing between TheDevelopersEnd and
                  the client. Any changes to the project scope or timelines must
                  be communicated and agreed upon by both parties in writing.
                </p>
                <h3>
                  <span>5.</span> Payment Terms
                </h3>
                <p>
                  Payment terms and conditions will be agreed upon in writing
                  between TheDevelopersEnd and the client. Unless otherwise
                  stated, all payments are due according to the agreed-upon
                  schedule. Failure to make payments may result in project
                  delays or suspension of services.
                </p>
                <h3>
                  <span>6.</span> Limitation of Liability
                </h3>
                <p>
                  TheDevelopersEnd will not be liable for any direct, indirect,
                  incidental, consequential, or punitive damages arising out of
                  or in connection with the use of our services. We make no
                  warranties or representations regarding the accuracy,
                  reliability, or availability of any content or services
                  provided.
                </p>
                <h3>
                  <span>7.</span> Termination
                </h3>
                <p>
                  Either party may terminate the services provided by
                  TheDevelopersEnd by providing written notice. Upon
                  termination, the client is responsible for any outstanding
                  payments due up until the termination date.
                </p>
                <h3>
                  <span>8.</span> Governing Law
                </h3>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the jurisdiction in which TheDevelopersEnd
                  operates. Any disputes arising out of these Terms shall be
                  subject to the exclusive jurisdiction of the courts in that
                  jurisdiction.
                </p>
                <h3>
                  <span>9.</span> Changes to Terms
                </h3>
                <p>
                  TheDevelopersEnd reserves the right to modify or update these
                  Terms at any time. Any changes will be posted on our website,
                  and it is your responsibility to review these Terms
                  periodically.
                </p>
                <p><strong>
                  By accessing or using our services, you acknowledge that you
                  have read, understood, and agreed to these Terms. If you have
                  any questions or concerns, please <Link href="/contact">
                    <a className="services-btn">Contact Us</a>
                  </Link></strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTO />

      <Footer />
    </>
  );
}
