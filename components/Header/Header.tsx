import React from 'react'
import headerClasses from './header.module.css'
import Link from "next/link";


const Header = () => {
  return (
    <header className={headerClasses.container}>
      <Link className={headerClasses.links} href="/">Main</Link>
      <Link className={headerClasses.links} href="/blog">Blog</Link>
    </header>
  )
}

export default Header