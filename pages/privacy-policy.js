import React from "react";
import Link from "next/link";
// import NavbarTwo from '@/components/Layout/NavbarTwo'
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function PrivacyPolicy() {
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
            <h2>Privacy Policy</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="privacy-policy-content">
                <div className="privacy-policy-image">
                  <img src="/images/privacy-policy.jpg" alt="image" />
                </div>

                <p>
                  <i>
                    At TheDevelopersEnd, we value the privacy and security of
                    our website visitors and clients. This Privacy Policy
                    outlines how we collect, use, and protect your personal
                    information. By using our website and services, you consent
                    to the terms described below.
                  </i>
                </p>
                <h3>Information We Collect:</h3>
                <h3>
                  <span>1.</span> Personal Information
                </h3>
                <blockquote className="blockquote">
                  <p>
                    When you engage with our services or submit inquiries, we
                    may collect personal information such as your name, email
                    address, phone number, and company details.
                  </p>
                </blockquote>
                <h3>
                  <span>2.</span> Website Usage Data
                </h3>
                <p>
                  We may gather non-personal information about your interactions
                  with our website, including your IP address, browser type,
                  referring pages, and access times. This data helps us analyze
                  website performance and improve user experience.
                </p>
                <h3>Use of Information:</h3>
                <h3>
                  <span>1.</span> Service Delivery
                </h3>
                <p>
                  We use the personal information you provide to deliver our IT
                  services, respond to your inquiries, and fulfill your specific
                  requests.
                </p>
                <h3>
                  <span>2.</span> Communication
                </h3>
                <p>
                  We may use your contact information to communicate with you
                  regarding our services, updates, promotions, and relevant
                  industry information. You can opt out of these communications
                  at any time.
                </p>
                <h3>
                  <span>3.</span> Analytics and Improvements
                </h3>
                <p>
                  Non-personal information collected through website usage data
                  enables us to analyze user behavior, improve our website, and
                  tailor our services to better meet your needs.
                </p>
                <h3>Data Security:</h3>
                <p>
                  We implement industry-standard security measures to protect
                  your personal information from unauthorized access,
                  disclosure, alteration, or destruction. However, no data
                  transmission over the internet or electronic storage is 100%
                  secure. While we strive to protect your data, we cannot
                  guarantee absolute security.
                </p>
                <h3>Third-Party Disclosure:</h3>
                <p>
                  We do not sell, trade, or transfer your personal information
                  to third parties without your consent, except for trusted
                  service providers who assist us in delivering our services.
                  These providers are bound by confidentiality agreements and
                  are prohibited from using your information for any other
                  purposes.
                </p>
                <h3>Cookies and Tracking Technologies:</h3>
                <p>
                  We may use cookies and similar tracking technologies to
                  enhance your browsing experience, analyze website traffic, and
                  customize content. You can modify your browser settings to
                  refuse cookies, but this may limit your access to certain
                  features of our website.
                </p>
                <h3>Third-Party Links:</h3>
                <p>
                  Our website may contain links to third-party websites or
                  services. We are not responsible for the privacy practices or
                  content of these websites. We encourage you to review their
                  respective privacy policies.
                </p>
                <h3>Updates to the Privacy Policy:</h3>
                <p>
                  We reserve the right to update this Privacy Policy
                  periodically. Any changes will be posted on this page with an
                  updated revision date. We recommend reviewing this policy
                  regularly to stay informed of our practices.
                </p>
                <h3>Contact Us:</h3>
                <p>
                  If you have any questions or concerns regarding our Privacy
                  Policy or the handling of your personal information, please
                  contact us. We will respond to your inquiry promptly.
                </p>
                <h3>Privacy Policy Agreement </h3>
                <p>
                  By continuing to use our website and services, you acknowledge
                  that you have read and understood our Privacy Policy and
                  consent to the collection, use, and protection of your
                  personal information as described herein.
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
