import { useState, useEffect } from 'react'

import useTitle from "../components/hooks/useTitle.jsx"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import AboutMe from "../components/AboutMe.jsx"
import MoreInfo from "../components/MoreInfo.jsx"
import Skills from "../components/Skills.jsx"

import Portfolio from "../components/PortfolioSection.jsx"
import Hiring from "../components/Hire.jsx"

function Home() {
	useTitle("Home");

	let SESSION_all_animations_played = JSON.parse(window.sessionStorage.getItem('all_animations_played'));

	if (SESSION_all_animations_played === null) SESSION_all_animations_played = false;

	const [all_animations_played, setAnimationsPlayed] = useState(SESSION_all_animations_played);

	useEffect(() => {
		window.sessionStorage.setItem('all_animations_played', JSON.stringify(all_animations_played))
	}, [all_animations_played])

	function setAnimationsPlayedWrap(value) {
		setAnimationsPlayed(value);
	}

	
	return (
		<>
			<Header all_animations_played={all_animations_played} />
			<main>
				<AboutMe all_animations_played={all_animations_played} />
				<MoreInfo all_animations_played={all_animations_played} />
				<Skills all_animations_played={all_animations_played} />
				<div id="flex_container">
					<Portfolio all_animations_played={all_animations_played} />
					<Hiring setAnimationsPlayed={setAnimationsPlayedWrap} all_animations_played={all_animations_played} />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Home