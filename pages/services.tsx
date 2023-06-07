import React from 'react'
import Layout from '@/components/Layouts/Layout'
import Products from '@/components/Products'
import { sitedetails } from '@/services/default'
import Pricings from '@/components/Pricing'

export default function Services() {
  return (
    <>
    <Layout>
        <Products details={sitedetails} /> 
        <Pricings details={sitedetails} />
    </Layout>
    </>
  )
}
