
function Hire_Page() {
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
			if (isVisibleInViewport(document.querySelector("section#hire"), 3)) {
				document.querySelector("section#hire").classList.add("animate");
				document.querySelector("section#hire").classList.add("right_to_left");
			}
		})
	} else if (window.innerWidth < 550) { // works if it is a mobile device
		window.addEventListener("scroll", function() {
			if (isVisibleInViewport(document.querySelector("section#hire"), 1)) {
				document.querySelector("section#hire").classList.add("animate");
				document.querySelector("section#hire").classList.add("fade_in");
			}
		})
	}

	return (
		<section id="hire">
			<h2>Are you hiring?</h2>
			<hr />
			<div className="text">
				<p>
					If you are an employer and interested in hiring, you can take a look at my CV <a href="https://drive.google.com/file/d/1WLmnT231G0Yoj2Cy6v94UlKyBqVN0XBX/view?usp=drive_link" target="_blank">here</a>.
				</p>
				<p>
					<em>
					Pokud jste zaměstnavatel a máte zájem o zaměstnání, můžete se podívat na můj životopis <a href="https://drive.google.com/file/d/1p2f3MQkbfGnYbNovBmaBHojOpnhvCbF-/view?usp=drive_link" target="_blank"> zde</a>.
					</em>
				</p>
			</div>
		</section>
	)
}

export default Hire_Page;