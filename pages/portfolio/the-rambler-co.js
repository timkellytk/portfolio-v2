import Head from "next/head";
import Layout from "../../components/util/Layout";
import { TheRamblerCoProject } from "../../components/PortfolioProject/allProjects";

export default function Index() {
  return (
    <>
      <Head>
        <title>The Rambler Co | Portfolio | timkelly.dev</title>
        <meta
          property="og:image"
          content="public/assets/images/openGraph/ogRambler.png"
        />
      </Head>
      <Layout>
        <TheRamblerCoProject />
      </Layout>
    </>
  );
}
