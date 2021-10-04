import Head from "next/head";
import Layout from "../../components/util/Layout";
import { SculptrVRProject } from "../../components/PortfolioProject/allProjects";

export default function Index() {
  return (
    <>
      <Head>
        <title>SculptrVR | Portfolio | timkelly.dev</title>
        <meta
          property="og:image"
          content="public/assets/images/openGraph/ogSculptrVR.png"
        />
      </Head>
      <Layout>
        <SculptrVRProject />
      </Layout>
    </>
  );
}
