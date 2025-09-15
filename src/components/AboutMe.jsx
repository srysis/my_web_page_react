import { useEffect } from 'react'

function AboutMe( {all_animations_played} ) {
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
		if (isVisibleInViewport(document.querySelector("section#about_me"), 40)) {
			document.querySelector("section#about_me").classList.add("animate");
			document.querySelector("section#about_me").classList.add("left_to_right");
		}
	}

	function onMobileScroll() {
		if (isVisibleInViewport(document.querySelector("section#about_me"), 1)) {
			document.querySelector("section#about_me").classList.add("animate");
			document.querySelector("section#about_me").classList.add("fade_in");
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


	return (
		<section id="about_me" className={all_animations_played ? "animated" : ""}>
			<h2>Who are you?</h2>
			<hr />
			<div className="text">
				<p>My name is <b>Denis</b>, but I go by the nickname "<em>srysis</em>". I am 23 years old.</p>
				<p>I am a Web-developer with almost two years of experience.</p>
				<p>You are currently on my personal web-page, where all my projects and some bits of information about me can be seen and read.</p>
				<p>Welcome and <b>enjoy your stay!</b></p>
			</div>
		</section>
	)
}

export default AboutMe;