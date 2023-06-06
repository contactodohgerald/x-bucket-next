import Layout from "@/components/Layouts/Layout";
import RecipeGenerate from "@/components/RecipeGenerate";
import React from "react";

export default function generaterecipe() {
  return (
    <>
      <Layout>
        <section className="flex items-center py-5 font-poppins w-full bg-[url('/used/food-storytelling.png')]">
          <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <RecipeGenerate />
          </div>
        </section>
      </Layout>
    </>
  );
}
