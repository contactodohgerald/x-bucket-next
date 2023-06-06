import React from 'react'
import AboutUs from '@/components/AboutUs'
import Layout from '@/components/Layouts/Layout'
import { sitedetails } from '@/services/default'
import HeroTwo from '@/components/HeroTwo'

export default function about() {
  return (
    <>
    <Layout>
        <HeroTwo>About Us</HeroTwo>
        <AboutUs details={sitedetails} />
    </Layout>
    </>
  )
}
