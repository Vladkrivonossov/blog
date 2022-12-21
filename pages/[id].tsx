import { Article } from "../components/Article/Article";
import { GetStaticPropsContext, NextPage } from "next";
import { createClient } from "next-sanity";
import {IArticleAPI} from "../types/ArticleAPI";
import {PortableTextBlock} from "@portabletext/types";


interface Props {
  title: string;
  content: PortableTextBlock[];
}

const ArticlePage: NextPage<Props> = ({ title, content }) => {
  return <Article title={title} content={content} />;
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const page = context.params?.id ? context.params.id : ''

  const res: IArticleAPI[] = await client.fetch(`*[slug == '${page}']`)

  return {
    props: {
      title: res[0].title,
      content: res[0].content,
    },
  };
}

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false
})

export async function getStaticPaths() {
  const articles: IArticleAPI[] = await client.fetch(`*`)

  const slugs = articles.map((article) => {
    return `/${article.slug}`
  })

  return {
    paths: slugs,
    fallback: false,
  };
}

export default ArticlePage;
