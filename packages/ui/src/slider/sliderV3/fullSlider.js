import React from "react"
//import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"
//import { Wysiwyg } from "@vactory/next/wysiwyg"

export const FullImageSlider = ({ item, isActive }) => {
	const profession = item.profession
	const link = item.link
	const link_label = item.link_label

	return (
		<Link
			className={`${!isActive ? "transition scale-y-75" : ""} `}
			href={"https://www.albaridbank.ma/fr"}
		>
			<div
				className="keen-slider__slide number-slide  w-1/2 bg-fixed h-full  group max-h-10 rounded-xl place-content-center"
				style={{ backgroundImage: `url(${item})` }}
			>
				<div className="bottom-0 inset-x-1/2 flex h-full flex-col justify-center items-center space-x-3">
					<div className="text-center" textAlign="center">
						{
							/*image && */ <img
								src={
									"https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80"
								}
								className="relative text-white left-2 w-14 h-14 group-hover:scale-125"
							/>
						}
						{
							/*Link && Link_label && */
							<h2 className="items-center px-3 py-2  border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-transparent ease-in-out sm:delay-150 group-hover:text-yellow-400 focus:outline-none">
								Ouvrir
							</h2>
						}
						<p className="text-white">un compte</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
