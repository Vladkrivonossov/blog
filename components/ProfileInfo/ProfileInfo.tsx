import classNames from 'classnames'
import React from 'react'
import Links from '../Links/Links'
import profileClasses from './ProfileInfo.module.css'

export const ProfileInfo = () => {
	return (
		<div className={profileClasses.container}>
			<Links />
			<div>
				<p className={classNames(profileClasses.accent)}>Hi, my name is</p>
				<h1 className={profileClasses.name}>Vlad Krivonosov.</h1>
				<h2 className={profileClasses.specification}>
					I build things for web with
					<span className={profileClasses.accent}>&nbsp;React.</span>
				</h2>
			</div>
		</div>
	)
}
