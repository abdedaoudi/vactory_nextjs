import { Layout } from "@/components/layout"
import { getMenus } from "@vactory/next/menus/handler"
import { getEnabledMenus } from "@vactory/next/utils"
import { getTranslations } from "@vactory/next/i18n/handler"

const enabledMenus = getEnabledMenus()

export default function Custom404() {
	return (
		<Layout>
			<h1>404 - This page could not be found.</h1>
		</Layout>
	)
}

export async function getStaticProps(context) {
	const { locale } = context
	const customLocale = locale === "default" ? "fr" : locale

	return {
		props: {
			i18n: await getTranslations(customLocale),
			menus: await getMenus(enabledMenus, customLocale),
			locale: customLocale,
		},
		revalidate: 10, // @todo: disable in dev
	}
}
