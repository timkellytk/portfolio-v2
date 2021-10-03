import Head from "next/head";
import Layout from "../../components/util/Layout";
import { GreenskyGamesProject } from "../../components/PortfolioProject/allProjects";

export default function Index() {
  return (
    <>
      <Head>
        <title>Greensky Games | Portfolio | timkelly.dev</title>
        <meta
          property="og:image"
          content="/assets/images/openGraph/ogGreensky.png"
        />
      </Head>
      <Layout>
        <GreenskyGamesProject />
      </Layout>
    </>
  );
}
