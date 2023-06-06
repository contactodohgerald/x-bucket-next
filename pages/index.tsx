
import Layout from "@/components/Layouts/Layout";
import AboutUs from "@/components/AboutUs";
import Index from "@/components/Index";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

import { sitedetails } from '@/services/default'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Index />     
      <AboutUs details={sitedetails} />
      <Pricing details={sitedetails} />
      <Contact details={sitedetails}  />
    </Layout>
  );
}
