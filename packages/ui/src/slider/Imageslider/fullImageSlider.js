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
			className="keen-slider__slide number-slide relative max-h-10 flex-col items-center justify-center text-5xl text-white font-medium rounded-xl sm:px-10 "
			style={{ backgroundImage: `url(${image})` }}
		>
			{/* Add Background style={{ backgroundImage: `url(${image})` }} */}

			<div className="flex h-full flex-col justify-center items-cente sm:ease-in-out sm:delay-150 sm:hover:-translate-y-1 sm:hover:scale-110">
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
