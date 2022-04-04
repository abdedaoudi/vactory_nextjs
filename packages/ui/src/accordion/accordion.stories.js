import React from "react"
import { Accordion } from "./accordion"
import { PlaceholderSections } from "../_helpers/section"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export const Default = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Accordion />
		</div>
	)
}

export default {
	title: "Components/accordion",
}
