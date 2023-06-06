import React from 'react'
import Layout from '@/components/Layouts/Layout'
import Pricing from '@/components/Pricing'

import { sitedetails } from '@/services/default'
import HeroTwo from '@/components/HeroTwo'

export default function pricing() {
  return (
    <>
    <Layout>
        <HeroTwo>Pricing</HeroTwo>
        <Pricing details={sitedetails} />
    </Layout>
    </>
  )
}
