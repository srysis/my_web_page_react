import { useEffect } from 'react'
import { Link } from "react-router-dom"

function PortfolioSection( {all_animations_played} ) {
	// function that checks if given element is in the user's browser's viewport by X percent, where X is from 0 to 100
	function isVisibleInViewport(element, percentage) {
		let rect = element.getBoundingClientRect();
		let windowHeight = (window.innerHeight || document.documentElement.clientHeight);

		return !(
			Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentage ||
			Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentage
		)
	};


	function onDekstopScroll() {
		if (isVisibleInViewport(document.querySelector("section#portfolio"), 3)) {
			document.querySelector("section#portfolio").classList.add("animate");
			document.querySelector("section#portfolio").classList.add("left_to_right");
		}
	}

	function onMobileScroll() {
		if (isVisibleInViewport(document.querySelector("section#portfolio"), 1)) {
			document.querySelector("section#portfolio").classList.add("animate");
			document.querySelector("section#portfolio").classList.add("fade_in");
		}
	}

	useEffect(() => {
		if (!all_animations_played) {
			if (window.innerWidth > 550) { // check if it's not a mobile device
				window.addEventListener("scroll", onDekstopScroll);
			} else if (window.innerWidth < 550) { // works if it is a mobile device
				window.addEventListener("scroll", onMobileScroll);
			}
		} else {
			window.removeEventListener("scroll", onDekstopScroll);
			window.removeEventListener("scroll", onMobileScroll);
		}

		return () => { window.removeEventListener("scroll", onDekstopScroll); window.removeEventListener("scroll", onMobileScroll); }
	}, [all_animations_played]);


	function onClickHandler() {
		window.sessionStorage.setItem('scroll_pos', JSON.stringify(window.scrollY));
	}

	return (
		<section id="portfolio" className={all_animations_played ? "animated" : ""}>
			<h2>My portfolio</h2>
			<hr />
			<div className="text">
				<p>I have been working on several small projects, but I have also worked on replication of pre-existing templates, that are freely available.</p>
				<p style={{ "marginTop" : "10px" }}><strong><Link to="/portfolio"  onClick={onClickHandler}>You can access it here.</Link></strong></p>
			</div>
		</section>
	)
}

export default PortfolioSection;