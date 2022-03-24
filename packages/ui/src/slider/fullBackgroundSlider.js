import React from "react"
//import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"

export const FullBackgroundSlider = (props) => {
	const isActive = props.isActive
	return (
		<div className="keen-slider__slide bg-cover number-slide bg-gray-600 relative items-center justify-center text-5xl text-white font-medium h-screen w-full max-h-screen">
			{isActive && (
				<div className="flex h-full flex-col justify-center items-center  space-x-3">
					<div className="text-center" textAlign="center">
						{console.log("isActive")}
						Desc
						<div className="flex justify-center mt-12">
							<Link
								className="inline-flex items-center px-3 py-2  border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-transparent border-2 border-white hover:bg-white hover:text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 "
								href={"https://keen-slider.io/docs"}
							>
								En savoir plus
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
