import Head from "next/head";
import Layout from "../components/util/Layout";
import Contact from "../components/Contact";

export default function Index() {
  return (
    <>
      <Head>
        <title>Contact | timkelly.dev</title>
        <meta
          property="og:image"
          content="public/assets/images/openGraph/ogHome.png"
        />
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
