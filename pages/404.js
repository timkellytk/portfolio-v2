import Head from "next/head";
import Layout from "../components/util/Layout";
import Custom404Component from "../components/Custom404";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Error | timkelly.dev </title>
      </Head>
      <Layout>
        <Custom404Component />
      </Layout>
    </>
  );
}
