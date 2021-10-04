import Head from "next/head";
import Layout from "../../components/util/Layout";
import { EvolutionaryTutorsProject } from "../../components/PortfolioProject/allProjects";

export default function Index() {
  return (
    <>
      <Head>
        <title>Evolutionary Tutors | timkelly.dev</title>
        <meta
          property="og:image"
          content="public/assets/images/openGraph/ogEvolutionary.png"
        />
      </Head>
      <Layout>
        <EvolutionaryTutorsProject />
      </Layout>
    </>
  );
}
