import { Article } from "../components/Article/Article";
import { GetStaticPropsContext, NextPage } from "next";

interface Props {
  title: string;
  text: string;
}

const ArticlePage: NextPage<Props> = ({ title, text }) => {
  return <Article title={title} text={text} />;
};

export async function getStaticProps(context: GetStaticPropsContext) {
  console.log(context);
  return {
    props: {
      title: "Title of test post =)",
      text: "Text of test post",
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      "/page-1",
      "/page-2",
      "/page-3",
      "/page-4",
      "/page-5",
      "/page-6",
      "/page-7",
    ],
    fallback: false,
  };
}

export default ArticlePage;
