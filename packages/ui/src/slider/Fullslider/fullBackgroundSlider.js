import React from "react"
//import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"
//import { Wysiwyg } from "@vactory/next/wysiwyg"

export const FullBackgroundSlider = ({
	title,
	description,
	link,
	link_label,
	isActive,
}) => {
	/*const title = props.title
	const description = props.description
	const image = props.image
	const link = props.link
	const link_label = props.link_label */
	//const isActive = props.isActive
	return (
		<div className="keen-slider__slide number-slide flex sm:bg-cover number-slide bg-gray-600 relative items-center justify-center text-5xl text-white font-medium h-screen  max-h-screen">
			{" "}
			{/* Add Background style={{ backgroundImage: `url(${image})` }} */}
			{isActive && (
				<div className="flex h-full flex-col justify-center items-center space-x-3">
					<div className="text-center " textAlign="center">
						{console.log("isActive")}
						{
							/*title && */ <h3 className="text-white text-3xl font-bold mb-2">
								{title}Title
							</h3>
						}
						{
							/*description  && <div className="text-white mb-3">
								<Wysiwyg html={description} /> */
							<div className="text-white mb-3">description</div>
						}
						{
							/*Link && Link_label && */
							<Link
								className="inline-flex items-center px-3 py-2  border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-transparent border-2 border-white hover:bg-white hover:text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 "
								href={link}
							>
								{link_label}En savoir plus
							</Link>
						}
					</div>
				</div>
			)}
		</div>
	)
}
