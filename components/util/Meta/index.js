import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../../../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/logo192.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Tim Kelly is a front-end web developer that creates beautiful, responsive websites with React. Tim has built websites for The Rambler Co And Evolutionary Tutors. Tim is available for freelance web development to a select client base."
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
