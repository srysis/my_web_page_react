
function AboutMe() {
	// function that checks if given element is in the user's browser's viewport by X percent, where X is from 0 to 100
	function isVisibleInViewport(element, percentage) {
		let rect = element.getBoundingClientRect();
		let windowHeight = (window.innerHeight || document.documentElement.clientHeight);

		return !(
			Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentage ||
			Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentage
		)
	};
	
	if (window.innerWidth > 550) { // check if it's not a mobile device
		window.addEventListener("scroll", function() {
			if (isVisibleInViewport(document.querySelector("section#about_me"), 40)) {
				document.querySelector("section#about_me").classList.add("animate");
				document.querySelector("section#about_me").classList.add("left_to_right");
			}
		})
	} else if (window.innerWidth < 550) { // works if it is a mobile device
		window.addEventListener("scroll", function() {
			if (isVisibleInViewport(document.querySelector("section#about_me"), 1)) {
				document.querySelector("section#about_me").classList.add("animate");
				document.querySelector("section#about_me").classList.add("fade_in");
			}
		})
	}

	return (
		<section id="about_me">
			<h2>Who are you?</h2>
			<hr />
			<div className="text">
				<p>My name is <b>Denis</b>, but I go by the nickname "<em>srysis</em>". I am 22 years old.</p>
				<p>I am a Junior level Front-End developer and I have been studying this subject for almost a year.</p>
				<p>You are currently on my personal web-page, where all my projects and some bits of information about me can be seen and read.</p>
				<p>Welcome and <b>enjoy your stay!</b></p>
			</div>
		</section>
	)
}

export default AboutMe;