import React from "react"
import { Outlet } from "react-router-dom"

import Header from "./components/Header"
import Aside from "./components/Aside"
import Footer from "./components/Footer"


function Layout() {
	const [isAsideVisible, toggleAsideVisibility] = React.useState(false);

	function toggleAsideVisibilityFromChildren(value) {
		toggleAsideVisibility(value);
	}

	return (
		<>
			<Header />
			<Aside isVisible={isAsideVisible} toggleVisibility={toggleAsideVisibilityFromChildren} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout