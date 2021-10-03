import Head from "next/head";
import Layout from "../../components/util/Layout";
import Portfolio from "../../components/Portfolio";

export default function Index() {
  return (
    <>
      <Head>
        <title>Portfolio | Tim Kelly, Front-End Web Developer</title>
        <meta
          property="og:image"
          content="/assets/images/openGraph/ogHome.png"
        />
      </Head>
      <Layout>
        <Portfolio />
      </Layout>
    </>
  );
}
