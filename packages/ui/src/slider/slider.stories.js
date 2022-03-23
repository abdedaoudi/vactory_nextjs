import React from "react"
import { Slider } from "./slider"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Slider />
		</div>
	)
}

export default {
	title: "Components/Slider",
}
