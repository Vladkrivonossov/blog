import { Posts } from "../components/Posts/Posts";
import { IArticle } from "../types/Article";
import { NextPage } from "next";

interface Props {
  articles: IArticle[];
}

const Home: NextPage<Props> = ({ articles }) => {
  return <Posts articles={articles} />;
};

export async function getStaticProps() {
  return {
    props: {
      articles: [
        { slug: "page-1", title: "title-1", text: "text-1" },
        { slug: "page-2", title: "title-2", text: "text-2" },
        { slug: "page-3", title: "title-3", text: "text-3" },
        { slug: "page-4", title: "title-4", text: "text-4" },
        { slug: "page-5", title: "title-5", text: "text-5" },
        { slug: "page-6", title: "title-6", text: "text-6" },
        { slug: "page-7", title: "title-7", text: "text-7" },
      ],
    },
  };
}

export default Home;
