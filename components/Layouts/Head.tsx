import React from "react";
import Head from 'next/head'

interface Props {
  appName: string
}

const BucketHead = ({appName}: Props) => {

  return (
    <>
      <Head>
        <title>{appName} : Revolutionizing storytelling, joke telling, and recipe generation</title>
        <meta name="description" content="Through its AI store, X-Bucket brings forth a new era of creativity and entertainment, offering users the opportunity to experience captivating narratives, hilarious jokes, and innovative recipes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );

}

export default BucketHead