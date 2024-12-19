import useTitle from "../components/hooks/useTitle.jsx"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import AboutMe from "../components/AboutMe.jsx"
import MoreInfo from "../components/MoreInfo.jsx"

import Portfolio from "../components/PortfolioSection.jsx"
import Hiring from "../components/Hire.jsx"

function Home() {
	useTitle("Home");

	return (
		<>
			<Header />
			<main>
				<AboutMe />
				<MoreInfo />
				<div id="flex_container">
					<Portfolio />
					<Hiring />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Home