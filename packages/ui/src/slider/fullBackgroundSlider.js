import React from "react"
//import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"

export const FullBackgroundSlider = (isActive) => {
	return (
		<div className="keen-slider__slide number-slide bg-gray-600 flex items-center justify-center text-5xl text-white font-medium h-screen max-h-screen">
			{isActive && (
				<div className="flex h-full flex-col justify-center items-center mx-auto max-w-lg space-x-3">
					<div className="text-center" textAlign="center">
						{console.log("isActive")}
						Desc
						<div className="flex justify-center mt-12">
							<Link href={"https://keen-slider.io/docs"}>
								<button
									type="button"
									className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Button text
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
