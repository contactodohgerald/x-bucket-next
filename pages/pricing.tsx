import React from 'react'
import Layout from '@/components/Layouts/Layout'
import Pricings from '@/components/Pricing'

import { sitedetails } from '@/services/default'
import HeroTwo from '@/components/HeroTwo'

export default function Pricing() {
  return (
    <>
    <Layout>
        <HeroTwo>Pricing</HeroTwo>
        <Pricings details={sitedetails} />
    </Layout>
    </>
  )
}
