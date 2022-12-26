import React, { FC, ReactElement } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion"
import customLinkClasses from './customlink.module.css'

interface Props {
  href: string;
  title: string;
  children: ReactElement
}


const CustomLink: FC<Props> = ({href, children, title }) => {

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{
          scale: 1.1
        }}
      >
        <a className={customLinkClasses.link} href={href} rel="noreferrer" target="_blank">
          {children}
          {title}
        </a>
      </m.div>
    </LazyMotion>
  )
}

export default CustomLink