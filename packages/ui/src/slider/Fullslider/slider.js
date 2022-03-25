import React, { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react.es" // import from 'keen-slider/react.es' for to get an ES module
//keep this css file just for the icon next and previous to change them after
//import "./styles.css"
import { FullBackgroundSlider } from "./fullBackgroundSlider"

export const Slider = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		loop: true,
		defaultAnimation: {
			duration: 10000,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},
	})

	const ns = [1, 2, 3, 4]
	return (
		<>
			<div
				className="navigation-wrapper relative h-screen w-screen overflow-hidden
"
			>
				<div ref={sliderRef} className="keen-slider relative w-full">
					{ns.map((n, index) => {
						return <FullBackgroundSlider key={n} isActive={currentSlide === index} />
					})}
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
							disabled={currentSlide === 0}
						/>

						<Arrow
							right
							onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
							disabled={
								currentSlide === instanceRef.current.track.details.slides.length - 1
							}
						/>
					</>
				)}
				{loaded && instanceRef.current && (
					<div className="dots flex absolute invisible sm:visible items-center justify-center py-2.5 bottom-10 right-1/2 left-1/2 ">
						{[...Array(instanceRef.current.track.details.slides.length).keys()].map(
							(idx) => {
								return (
									<button
										key={idx}
										onClick={() => {
											instanceRef.current?.moveToIdx(idx)
										}}
										className={
											"dot w-2 h-2 bg-gray-400 p-1 cursor-pointer border-current rounded-full my-0 mx-1.5 focus:outline-none" +
											(currentSlide === idx ? " active bg-black" : "")
										}
									></button>
								)
							}
						)}
					</div>
				)}
			</div>
		</>
	)
}

function Arrow(props) {
	const disabeld = props.disabled ? " arrow--disabled" : ""
	return (
		<button
			onClick={props.onClick}
			className={`arrow sm:-translate-y-1/2 fill-white absolute sm:bottom-1/2 items-center sm:cursor-pointer bottom-10 right-6 ${
				props.left
					? "arrow--left sm:left-20 sm:border-2 sm:border-white hover:bg-yellow-400  hover:border-transparent sm:py-5 sm:px-5 sm:rounded-full w-12 h-8 mr-11"
					: "arrow--right sm:right-20 sm:border-2 sm:border-white hover:bg-yellow-400 hover:border-transparent sm:py-5 sm:px-5 sm:rounded-full w-12 h-8 "
			} ${disabeld}`}
		>
			<svg
				className="arrows relative divide-x "
				height="15"
				viewBox="0 0 30 30"
				width="15"
				xmlns="http://www.w3.org/2000/svg"
			>
				{props.left && (
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				)}
				{props.right && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
			</svg>
		</button>
	)
}
