import React from 'react'
import Link from 'next/link'
// import NavbarTwo from '@/components/Layout/NavbarTwo'
import ProjectsDetailsContent1 from '@/components/Projects/ProjectsDetailsContent1'
import CTO from '@/components/Common/CTO'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Layout/Footer'

export default function ProjectsDetails1() {
  return (
    <>
      {/* <NavbarTwo /> */}

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-graphic.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2></h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
      </div>

      <ProjectsDetailsContent1 />

      <CTO />

      <ContactForm />

      <Footer />
    </>
  )
}
