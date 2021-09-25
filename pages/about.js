import Head from "next/head";
import Layout from "../components/util/Layout";
import About from "../components/About";

export default function Index() {
  return (
    <>
      <Head>
        <title>About | timkelly.dev</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
