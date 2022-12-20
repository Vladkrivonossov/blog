import { Posts } from "../components/Posts/Posts";
import { createClient } from "next-sanity";
import { IArticle } from "../types/Article";
import { NextPage } from "next";

interface Props {
  articles: IArticle[];
}

const Home: NextPage<Props> = ({ articles }) => {
  return <Posts articles={articles} />;
};

const client = createClient({
  projectId: 'l31sme3u',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false
})

export async function getStaticProps() {
  const articles = await client.fetch(`*[_type == "article"]`)

  return {
    props: {
      articles
    },
  };
}

export default Home;
