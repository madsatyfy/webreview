import React from 'react'
import Link from 'next/link'
// import NavbarTwo from '@/components/Layout/NavbarTwo'
import ProjectsDetailsContent3 from '@/components/Projects/ProjectsDetailsContent3'
import CTO from '@/components/Common/CTO'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Layout/Footer'

export default function ProjectsDetails3() {
  return (
    <>
      {/* <NavbarTwo /> */}

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-blockchain.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Blockchain Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      <ProjectsDetailsContent3 />

      <CTO />

      <ContactForm />

      <Footer />
    </>
  )
}
