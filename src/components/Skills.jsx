import { useEffect } from 'react'

function Skills( {all_animations_played} ) {
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
		if (isVisibleInViewport(document.querySelector("section#skills"), 3)) {
			document.querySelector("section#skills").classList.add("animate");
			document.querySelector("section#skills").classList.add("left_to_right");
		}
	}

	function onMobileScroll() {
		if (isVisibleInViewport(document.querySelector("section#skills"), 100)) {
			document.querySelector("section#skills").classList.add("animate");
			document.querySelector("section#skills").classList.add("fade_in");
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
		<section id="skills" className={all_animations_played ? "animated" : ""}>
			<h2>My skills</h2>
			<hr />
			<div className="text">
				<h3>Below are the tools and programming languages that I work or have worked with before:</h3>
				<div className="hard_skills">
					<ul>
						<li>
							<b>HTML</b> - all common tags that are widely used, understanding of DOM(Document Object Model) and how it's constructed;
						</li>
						<li>
							<b>CSS</b> - most of common selectors, pseudoclasses, positioning, animating and 'transitions', 'flexbox' and media-queries for adaptability;
						</li>
						<li>
							<b>JavaScript</b> - element creation and manipulation via DOM, style manipulation, event listeners, JSON processing and file uploading, 
							experience in utilizing asynchronious programming and 'promises';
						</li>
						<li>
							<b>React.js</b> - my main tool; creation of components for modular approach, utilizing React states and hooks, 
							packages 'React-Router' for 'client routing' and 'Axios' for client-server requests;
						</li>
						<li>
							<b>Node.js</b> - creating a working server with an API with 'Express', managing web-tokens with 'JWT' library, handling client-server requests;
						</li>
						<li>
							<b>MySQL</b> - creation of databases with multiple tables, usage of most common data types(INT, VARCHAR, BOOL, FLOAT, DOUBLE), usage of main SQL commands (SELECT, FROM, WHERE, UPDATE, ALTER), 
							'joining' tables in SQL queries (INNER and OUTER), setting 'PRIMARY' and 'FOREIGN' table keys;
						</li>
						<li>
							<b>GitHub and GitHub pages</b> - GitHub for version tracking, GitHub Pages for hosting this web-site;
						</li>
						<li>
							<b>C#</b> - general, but practical knowledge, understanding of OOP(objects, classes, methods) and it's principles(encapsulation, inheritance, polymorphism, and abstraction);
						</li>
						<li>
							<b>Adobe PhotoShop</b> - basic editing and post-processing of photos.
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills;