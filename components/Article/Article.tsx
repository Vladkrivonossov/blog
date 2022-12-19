import React, { FC } from "react";
import articleClasses from "./article.module.css";
import classNames from "classnames";
import themeClasses from "../../styles/theme.module.css";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface Props {
  title: string;
  text: string;
}

export const Article: FC<Props> = ({ title, text }) => {
  return (
    <>
      <article className={articleClasses.article}>
        <h1 className={classNames(themeClasses.h1, articleClasses.h1)}>
          {title}
        </h1>
        <ReactMarkdown>{text}</ReactMarkdown>
      </article>
      <Link href="/">
        <button
          className={classNames(themeClasses.button, articleClasses.button)}
        >
          Перейти к постам
        </button>
      </Link>
    </>
  );
};
