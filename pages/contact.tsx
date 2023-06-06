import Contact from "@/components/Contact";
import HeroTwo from "@/components/HeroTwo";
import Layout from "@/components/Layouts/Layout";
import { sitedetails } from "@/services/default";
import React from "react";

export default function contact() {
  return (
    <>
      <Layout>
        <HeroTwo>Contact Us</HeroTwo>
        <Contact details={sitedetails} />
      </Layout>
    </>
  );
}
