import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header/Header'
import '../styles/globals.css'
import themeClasses from '../styles/theme.module.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta property='og:site_name' content='Blog' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className={themeClasses.page}>
				<div className={themeClasses.container}>
					<Component {...pageProps} />
				</div>
			</main>
		</>
	)
}
