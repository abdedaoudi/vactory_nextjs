import { Layout } from "@/components/Layout"
import { Card } from "@vactory/ui/card"
import Image from "next/image"
import Slider from "@vactory/ui/slider"

export default function Index() {
	return (
		<Layout>
			<h1>Hello Playground</h1>
			<Card
				title="test card"
				excerpt="test sommaire"
				category="toto"
				url="/about"
				image={<Image src="/image-4.jpeg" width="500" height="500" alt="" />}
			/>
			<Slider />
		</Layout>
	)
}
