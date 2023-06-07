import React from 'react'
import AboutUs from '@/components/AboutUs'
import Layout from '@/components/Layouts/Layout'
import { sitedetails } from '@/services/default'
import HeroTwo from '@/components/HeroTwo'
import Products from '@/components/Products'

export default function About() {
  return (
    <>
    <Layout>
        <HeroTwo>About Us</HeroTwo>
        <AboutUs details={sitedetails} />
        <Products details={sitedetails} />    
    </Layout>
    </>
  )
}
