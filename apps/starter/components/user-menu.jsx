import { Fragment } from "react"
import classNames from "clsx"
import { Menu } from "@vactory/headlessui/menu"
import { Transition } from "@vactory/headlessui/transition"

const user = {
	name: "Chelsea Hagon",
	email: "chelsea.hagon@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}

const UserMenu = ({ data, signOut }) => {
	const userNavigation = [
		{ name: "Your Profile", href: "#." },
		{ name: "Settings", href: "#." },
		{ name: "Sign out", href: "#.", onClick: signOut },
	]

	return (
		<Menu as="div" className="inline-block flex-shrink-0 relative ml-4">
			<div>
				<Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
					<span className="sr-only">Open user menu</span>
					<img
						className="h-8 w-8 rounded-full"
						src={user.imageUrl}
						alt={data.user.email}
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="z-10	origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
					{userNavigation.map((item) => (
						<Menu.Item key={item.name}>
							{({ active }) => (
								<a
									href={item?.href}
									onClick={item?.onClick}
									className={classNames(
										active ? "bg-gray-100" : "",
										"block py-2 px-4 text-sm text-gray-700"
									)}
								>
									{item.name}
								</a>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default UserMenu
