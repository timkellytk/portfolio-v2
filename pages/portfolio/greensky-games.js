import Head from "next/head";
import Layout from "../../components/util/Layout";
import { GreenskyGamesProject } from "../../components/PortfolioProject/allProjects";

export default function Index() {
  return (
    <>
      <Head>
        <title>About | timkelly.dev</title>
      </Head>
      <Layout>
        <GreenskyGamesProject />
      </Layout>
    </>
  );
}
