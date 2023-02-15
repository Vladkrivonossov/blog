import { CssIcon } from '../../icons/CssIcon'
import { HtmlIcon } from '../../icons/HtmlIcon'
import { NestIcon } from '../../icons/NestIcon'
import { NodeIcon } from '../../icons/NodeIcon'
import { ReactIcon } from '../../icons/ReactIcon'
import { ReduxIcon } from '../../icons/ReduxIcon'
import { WebpackIcon } from '../../icons/WebpackIcon'
import { JavascriptIcon } from '../../icons/JavascriptIcon'
import { TypescriptIcon } from '../../icons/TypescriptIcon'
import { DockerIcon } from '../../icons/DockerIcon'
import skilsClasses from './Skils.module.css'

export const Skils = () => {
	return (
		<div className={skilsClasses.container}>
			<CssIcon />
			<HtmlIcon />
			<JavascriptIcon />
			<TypescriptIcon />
			<ReactIcon />
			<ReduxIcon />
			<WebpackIcon />
			<NodeIcon />
			<NestIcon />
			<DockerIcon />
		</div>
	)
}
