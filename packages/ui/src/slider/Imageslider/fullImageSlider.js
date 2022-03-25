import React from "react"
//import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"
//import { Wysiwyg } from "@vactory/next/wysiwyg"

export const FullImageSlider = ({ profession, link }) => {
	/*const title = props.title
	const description = props.description
	const image = props.image
	const link = props.link
	const link_label = props.link_label */
	//const isActive = props.isActive
	return (
		<div className="keen-slider__slide number-slide relative number-slide h-full  bg-gray-600  items-center justify-center text-5xl text-white font-medium  rounded-xl">
			{/* Add Background style={{ backgroundImage: `url(${image})` }} */}
			<div className="flex h-full flex-col justify-center items-center">
				<div className="text-center bottom-0 " textAlign="center">
					{console.log("isActive")}
					{/*Link && Link_label && */}
					<Link
						className="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
						href={link}
					>
						Profession
					</Link>
				</div>
			</div>
		</div>
	)
}
