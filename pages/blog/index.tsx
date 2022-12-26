import { Posts } from "../../components/Posts/Posts";
import { createClient } from "next-sanity";
import { NextPage } from "next";
import {IArticleAPI} from "../../types/ArticleAPI";

interface Props {
  articles: IArticleAPI[];
}

const Blog: NextPage<Props> = ({ articles }) => {
  return <Posts articles={articles} />;
};

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false
})

export async function getStaticProps() {
  const articles = await client.fetch(`*[_type == "article"]`)

  console.log(articles)

  return {
    props: {
      articles
    },
  };
}

export default Blog;
