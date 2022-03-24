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
		mode: "free-snap",
		renderMode: "performance",
		defaultAnimation: {
			duration: 10000,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},
		rtl: true,
	})

	const ns = [1, 2, 3, 4]
	return (
		<>
			<div
				className="navigation-wrapper relative h-full w-full overflow-hidden
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
					<div className="dots flex justify-center py-2.5 bottom-10 w-full ">
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
			className={`arrow -translate-y-1/2 fill-white absolute bottom-1/2 items-center cursor-pointer${
				props.left
					? "arrow--left left-20 border-2 border-white hover:bg-yellow-400  hover:border-transparent py-5 px-5 rounded-full"
					: "arrow--right right-20 border-2 border-white hover:bg-yellow-400 hover:border-transparent py-5 px-5 rounded-full"
			} ${disabeld}`}
		>
			<i className="icon-caret-left h-4 w-4 before:">
				<svg
					className="arrows relative top-0"
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
			</i>
		</button>
	)
}
