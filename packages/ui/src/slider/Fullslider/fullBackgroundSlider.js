import React from "react"
//import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"
//import { Wysiwyg } from "@vactory/next/wysiwyg"

export const FullBackgroundSlider = ({
	title,
	image,
	description,
	link,
	link_label,
	isActive,
	opacity,
	index,
}) => {
	/*const title = props.title
	const description = props.description
	const image = props.image
	const link = props.link
	const link_label = props.link_label */
	//const isActive = props.isActive
	//const opacity = props.opacity
	return (
		isActive && (
			<div
				className="fader__slide  sm:bg-cover absolute items-center justify-center text-5xl text-white h-full w-full "
				style={{ opacity: `${opacity}`, backgroundImage: `url(${image})` }}
			>
				<div className="absolute bottom-9 sm:bottom-0 sm:inset-x-1/2 sm:flex  sm:h-full sm:flex-col sm:justify-center  sm:items-center sm:space-x-3">
					<div className="sm:text-center p-3" textAlign="center">
						{console.log(index)}
						{
							/*title && */ <h3 className="text-white text-3xl font-bold mb-2">
								{title}Title
							</h3>
						}
						{
							/*description  && <div className="text-white mb-3">
								<Wysiwyg html={description} /> */
							<div className="text-white text-2xl sm:mb-3">description</div>
						}
						{
							/*Link && Link_label && */
							<Link
								className="items-center px-3 py-2  border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-transparent border-2 border-white hover:bg-white hover:text-black focus:outline-none"
								href={"https://keen-slider.io/docs"}
							>
								{link_label}En savoir plus
							</Link>
						}
					</div>
				</div>
			</div>
		)
	)
}
