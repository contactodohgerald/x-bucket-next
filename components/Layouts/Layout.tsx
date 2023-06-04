import React, { ReactNode } from "react";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
    <main className={`${styles.main} ${inter.className}`}>
        <Header />

        {children}

        <Footer />
    </main>
    </>
  );

}

export default Layout