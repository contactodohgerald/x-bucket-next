import HeroTwo from "@/components/HeroTwo";
import Layout from "@/components/Layouts/Layout";
import Storytelling from "@/components/Storytelling";
import React from "react";

export default function storytelling() {
  return (
    <>
      <Layout>
        <section className="flex items-center py-5 font-poppins w-full bg-[url('/used/food-storytelling.png')]">
          <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <Storytelling />
          </div>
        </section>
      </Layout>
    </>
  );
}
