import Head from "next/head";
import Layout from "../components/util/Layout";
import Contact from "../components/Contact";

export default function Index() {
  return (
    <>
      <Head>
        <title>Tim Kelly, Front-End Web Developer In Sydney, Australia</title>
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
