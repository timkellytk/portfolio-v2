import Head from "next/head";
import Layout from "../../components/util/Layout";
import { SketchboxDesignProject } from "../../components/PortfolioProject/allProjects";

export default function Index() {
  return (
    <>
      <Head>
        <title>Sketchbox Design | Portfolio | timkelly.dev</title>
        <meta
          property="og:image"
          content="/assets/images/openGraph/ogSketchbox.png"
        />
      </Head>
      <Layout>
        <SketchboxDesignProject />
      </Layout>
    </>
  );
}
