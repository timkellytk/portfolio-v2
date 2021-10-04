import Head from "next/head";
import Layout from "../components/util/Layout";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Tim Kelly, Front-End Web Developer In Sydney, Australia | timkelly.dev
        </title>
        <meta
          property="og:image"
          content="public/assets/images/openGraph/ogHome.png"
        />
      </Head>
      <Layout>
        <About />
        <Portfolio />
        <Contact />
      </Layout>
    </>
  );
}
