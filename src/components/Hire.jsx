import { useEffect } from 'react'

function Hire_Page({ all_animations_played, setAnimationsPlayed }) {
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
		if (isVisibleInViewport(document.querySelector("section#hire"), 3)) {
			document.querySelector("section#hire").classList.add("animate");
			document.querySelector("section#hire").classList.add("right_to_left");

			setTimeout(() => {
				setAnimationsPlayed(true);
			}, 2000);
		}
	}

	function onMobileScroll() {
		if (isVisibleInViewport(document.querySelector("section#hire"), 1)) {
			document.querySelector("section#hire").classList.add("animate");
			document.querySelector("section#hire").classList.add("fade_in");

			setTimeout(() => {
				setAnimationsPlayed(true);
			}, 500);
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
		<section id="hire" className={all_animations_played ? "animated" : ""}>
			<h2>Are you hiring?</h2>
			<hr />
			<div className="text">
				<p>
					If you are an employer and interested in hiring, you can take a look at my CV 
					<a href="https://drive.google.com/file/d/1WLmnT231G0Yoj2Cy6v94UlKyBqVN0XBX/view?usp=drive_link" target="_blank"> here</a>.
				</p>
				<p>
					Pokud jste zaměstnavatel a máte zájem o zaměstnání, můžete se podívat na můj životopis 
					<a href="https://drive.google.com/file/d/1p2f3MQkbfGnYbNovBmaBHojOpnhvCbF-/view?usp=drive_link" target="_blank"> zde</a>.
				</p>
			</div>
		</section>
	)
}

export default Hire_Page;