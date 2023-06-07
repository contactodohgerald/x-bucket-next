import Contacts from "@/components/Contact";
import HeroTwo from "@/components/HeroTwo";
import Layout from "@/components/Layouts/Layout";
import Products from "@/components/Products";
import { sitedetails } from "@/services/default";
import React from "react";

export default function Contact() {
  return (
    <>
      <Layout>
        <HeroTwo>Contact Us</HeroTwo>
        <Contacts details={sitedetails} />
        <Products details={sitedetails} /> 
      </Layout>
    </>
  );
}
