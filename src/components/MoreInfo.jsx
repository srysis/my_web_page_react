import { useEffect } from 'react'

function MoreInfo( {all_animations_played} ) {
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
		if (isVisibleInViewport(document.querySelector("section#more_info"), 40)) {
			document.querySelector("section#more_info").classList.add("animate");
			document.querySelector("section#more_info").classList.add("right_to_left");
		}
	}

	function onMobileScroll() {
		if (isVisibleInViewport(document.querySelector("section#more_info"), 1)) {
			document.querySelector("section#more_info").classList.add("animate");
			document.querySelector("section#more_info").classList.add("fade_in");
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
		<section id="more_info" className={all_animations_played ? "animated" : ""}>
			<h2>More information about me</h2>
			<hr />
			<div className="text">
				<p>
					I have a bachelor's degree in Software Engineering since I wanted to be a programmer, but as time went on I realized that advanced programming 
					is more complicated than I thought it would be, so I decided to develop myself in Front-End.
				</p>
				<p>
					I have tried myself in modelling and animating. I have also used to work with a program called <abbr title="Source Filmmaker">SFM</abbr>. I 
					was not very good at it, but by the time of using it, I have learned a lot of things about visual clarity 
				 	and general principles that can make a picture look good. But even though I really like working with 3D-graphics, 
					I often find myself burning out and not wanting to do it at all, so I decided to not make it a full-time job, otherwise it would be hard for me to enjoy the thing I really like.
				</p>
				<p>
					I have an experience with Unity game engine. I made a short game as my graduation project, that had one linear level, three types of enemies, 
					and pretty simple combat and movement mechanics. It taught me a lot about code and project management, as well as modelling and animating basics.
					I wanted to develop myself in solo game development, but there are more pressing matters to solve, so that idea was scrapped.
				</p>
				<p>
					Currently, I am learning Web-development. I have gained a certain amount of experience and knowledge while developing few projects,
					and I am ready to take a step further by applying to a job on the relevant position. 
				</p>
			</div>
		</section>
	)
}

export default MoreInfo;