import Head from "next/head";
import Layout from "../components/util/Layout";
import About from "../components/About";

export default function Index() {
  return (
    <>
      <Head>
        <title>About | timkelly.dev</title>
        <meta
          property="og:image"
          content="public/assets/images/openGraph/ogHome.png"
        />
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
