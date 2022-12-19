import React, { FC } from "react";
import postsClasses from "./posts.module.css";
import themeClasses from "../../styles/theme.module.css";
import classNames from "classnames";
import { IArticle } from "../../types/Article";
import plural from "plural-ru";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";

interface Props {
  articles: IArticle[];
}

export const Posts: FC<Props> = ({ articles }) => {
  return (
    <>
      <header className={postsClasses.header}>
        <h1 className={classNames(themeClasses.h1, postsClasses.h1)}>
          {articles.length > 0
            ? `${plural(
                articles.length,
                "%d пост",
                "%d поста",
                "%d постов"
              )} у чмони`
            : "У чмони нет постов"}
        </h1>
      </header>
      {articles.length && (
        <div className={postsClasses.list}>
          {articles.map((article) => {
            return (
              <ArticlePreview
                key={article.slug}
                slug={article.slug}
                text={article.text}
                title={article.title}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
