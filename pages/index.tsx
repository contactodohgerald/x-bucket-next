
import Layout from "@/components/Layouts/Layout";
import AboutUs from "@/components/AboutUs";
import Index from "@/components/Index";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  const sitedetails = {
    title: "X-Bucket",
    email: "support@xbucket.com"
  }
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
