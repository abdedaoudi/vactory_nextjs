import React from "react"
//import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"
//import { Wysiwyg } from "@vactory/next/wysiwyg"

export const FullImageSlider = ({ profession, link, image }) => {
	/*const profrssion = props.profession
	const link = props.link
	const image = props.image */
	//const isActive = props.isActive
	return (
		<div
			className="keen-slider__slide number-slide relative w-fill bg-fixed h-full max-h-10 rounded-xl"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="relative top-64 sm:ease-in-out sm:delay-150 sm:hover:-translate-y-1 sm:hover:scale-110 ">
				<div className="text-center" textAlign="center">
					{console.log("isActive")}
					{/*Link && Link_label && */}
					<Link
						className="inline-flex  bottom-0 px-3 py-2 text-sm leading-4 text-white font-medium rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
						href={link}
					>
						Profession
					</Link>
				</div>
			</div>
		</div>
	)
}
