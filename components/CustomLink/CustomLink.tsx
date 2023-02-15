import { domAnimation, LazyMotion, m } from 'framer-motion'
import { FC, ReactElement } from 'react'
import customLinkClasses from './customlink.module.css'

interface Props {
	href: string
	children: ReactElement
}

const CustomLink: FC<Props> = ({ href, children }) => {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				whileHover={{
					scale: 1.1,
				}}
			>
				<a className={customLinkClasses.link} href={href} rel='noreferrer' target='_blank'>
					{children}
				</a>
			</m.div>
		</LazyMotion>
	)
}

export default CustomLink
