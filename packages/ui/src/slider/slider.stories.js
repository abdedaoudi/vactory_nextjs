import React from "react"
import { Slider } from "./Fullslider/slider"
import { ImageSlider } from "./Imageslider/slider"
import { SliderV3 } from "./sliderV3/slider"
import { PlaceholderSections } from "../_helpers/section"

export const backgroundSlider = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Slider />
		</div>
	)
}

export const ImageSliders = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<ImageSlider />
		</div>
	)
}

export const SliderV = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<SliderV3 />
		</div>
	)
}

export default {
	title: "Components/Slider",
}
