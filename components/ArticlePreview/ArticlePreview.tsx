import React, { FC } from "react";
import previewClasses from "./article-preview.module.css";
import Link from "next/link";

interface Props {
  slug: string;
  text: string;
  title: string;
}

export const ArticlePreview: FC<Props> = ({ slug, text, title }) => {
  return (
    <Link href={`/${slug}`} role="article" className={previewClasses.article}>
      <h2 className={previewClasses.title}>{title}</h2>
      <p className={previewClasses.text}>{text}</p>
    </Link>
  );
};
