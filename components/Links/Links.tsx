import React from 'react'
import linkClasses from './links.module.css'
import CustomLink from '../CustomLink/CustomLink'
import { Github } from '../../icons/Github'
import { Vk } from '../../icons/Vk'
import { Telegram } from '../../icons/Telegram'

const Links = () => {
	return (
		<div className={linkClasses.container}>
			<ul className={linkClasses.ul}>
				<li>
					<CustomLink href='https://github.com/Vladkrivonossov'>
						<Github />
					</CustomLink>
				</li>
				<li>
					<CustomLink href='https://t.me/Vladkrivonosov'>
						<Telegram />
					</CustomLink>
				</li>
				<li>
					<CustomLink href='https://vk.com/id159913804'>
						<Vk />
					</CustomLink>
				</li>
			</ul>
		</div>
	)
}

export default Links
