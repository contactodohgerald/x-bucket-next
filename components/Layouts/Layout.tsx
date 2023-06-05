import React, { ReactNode } from "react";
import { Inter } from 'next/font/google'

import BucketHead from "./Head";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ['latin'] })

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout = ({children}: Props) => {

  return (
    <>
    <BucketHead appName='X-Bucket' />
    <Header>
      <main className={`${inter.className} bg-white text-black`}>
        {children}
      </main>
    </Header>
    <Footer />
    </>
  );

}

export default Layout