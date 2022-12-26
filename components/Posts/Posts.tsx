import React, { FC } from "react";
import postsClasses from "./posts.module.css";
import themeClasses from "../../styles/theme.module.css";
import classNames from "classnames";
import plural from "plural-ru";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import {IArticleAPI} from "../../types/ArticleAPI";
import {beautifyDate} from "../../utils";
import sloth from '../../images/sleepy-sloth.png'
import Image from "next/image";

interface Props {
  articles: IArticleAPI[];
}

export const Posts: FC<Props> = ({ articles }) => {
  return (
    <>
      <div className={postsClasses.title}>
        <h1 className={classNames(themeClasses.h1, postsClasses.h1)}>
          {articles.length > 0
            ? `${plural(
                articles.length,
                "%d пост",
                "%d поста",
                "%d постов"
              )}`
            : "Пока-что постов нету"}
        </h1>
      </div>
      {Boolean(articles.length) ? (
        <div className={postsClasses.list}>
          {articles.map((article) => {
            return (
              <ArticlePreview
                key={article.slug}
                slug={article.slug}
                text={beautifyDate(article._createdAt)}
                title={article.title}
              />
            );
          })}
        </div>
      ) : (
        <div className={postsClasses.img}>
          <Image src={sloth} alt="sleepy-sloth" />
        </div>
      )}
    </>
  );
};

