import React, { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react.es" // import from 'keen-slider/react.es' for to get an ES module
//keep this css file just for the icon next and previous to change them after
//import "./styles.css"
import { FullImageSlider } from "./fullImageSlider"

export const ImageSlider = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		loop: true,
		centerMode: true,
		breakpoints: {
			"(min-width: 200px)": {
				slides: { perView: 1 },
			},
			"(min-width: 600px)": {
				slides: { perView: 2, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 3, spacing: 12 },
			},
		},
		slides: { perView: 3 },
		renderMode: "performance",
		defaultAnimation: {
			duration: 5000,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},
	})

	const images = [
		"https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
		"https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
		"https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
		"https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
	]
	return (
		<>
			<div className="relative w-screen h-screen items-center justify-center">
				<div
					className="navigation-wrapper relative items-center justify-center h-full sm:px-48 overflow-hidden  
"
				>
					<div ref={sliderRef} className="keen-slider relative h-full">
						{images.map((n, index) => {
							return <FullImageSlider key={index} image={n} />
						})}
					</div>
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
					<div className="dots flex absolute sm:invisible visible items-center justify-center py-2.5 bottom-10 right-1/2 left-1/2 ">
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
			className={`arrow sm:-translate-y-1/2 sm:visible invisible items-center justify-center fill-white absolute sm:bottom-1/2  sm:cursor-pointer bottom-10 right-6 sm:border-2 sm:border-white hover:bg-yellow-400  hover:border-transparent sm:py-5 sm:px-5 sm:rounded-full w-12 h-12 ${
				props.left ? "arrow--left sm:left-20 mr-11" : "arrow--right sm:right-20  "
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
