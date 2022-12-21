import React, { FC } from "react";
import articleClasses from "./article.module.css";
import classNames from "classnames";
import themeClasses from "../../styles/theme.module.css";
import {PortableText} from "@portabletext/react";
import {PortableTextBlock} from "@portabletext/types";
import Link from "next/link";

interface Props {
  title: string;
  content: PortableTextBlock[];
}

export const Article: FC<Props> = ({ title, content }) => {
  return (
    <>
      <article className={articleClasses.article}>
        <h1 className={classNames(themeClasses.h1, articleClasses.h1)}>
          {title}
        </h1>
        <PortableText value={content} />
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
