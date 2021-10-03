import Head from "next/head";
import Layout from "../../components/util/Layout";
import { SwarmProject } from "../../components/PortfolioProject/allProjects";

export default function Index() {
  return (
    <>
      <Head>
        <title>Swarm VR | Portfolio | timkelly.dev</title>
        <meta
          property="og:image"
          content="/assets/images/openGraph/ogSwarm.png"
        />
      </Head>
      <Layout>
        <SwarmProject />
      </Layout>
    </>
  );
}
