
function MoreInfo() {
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
			if (isVisibleInViewport(document.querySelector("section#more_info"), 40)) {
				document.querySelector("section#more_info").classList.add("animate");
				document.querySelector("section#more_info").classList.add("right_to_left");
			}
		})
	} else if (window.innerWidth < 550) { // works if it is a mobile device
		window.addEventListener("scroll", function() {
			if (isVisibleInViewport(document.querySelector("section#more_info"), 0)) {
				document.querySelector("section#more_info").classList.add("animate");
				document.querySelector("section#more_info").classList.add("fade_in");
			}
		})
	}

	return (
		<section id="more_info">
			<h2>More information about me</h2>
			<hr />
			<div className="text">
				<p>
					I have a bachelor's degree in Software Engineering since I wanted to be a programmer, but as time went on I realized that advanced programming is more complicated than I thought it would be, 
					so I decided to develop myself in Front-End.
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
					Currently, I am learning Front-End development and consider myself at Junior level. I believe I have skills that are appropriate for this level
					and I am ready to take a step further by applying to a job on the same position. 
				</p>
				<div className="hard_skills">
					<h3>Below are the tools and programming languages that I work or have worked with before:</h3>
					<ul>
						<li>
							<b>HTML</b> - all common tags that are widely used, understanding of DOM(Document Object Model) and how it's constructed;
						</li>
						<li>
							<b>CSS</b> - positioning and animating, flex-box for more... flexible layout, media-queries for responsiveness via breakpoints;
							I also use SCSS for better code management and readability;
						</li>
						<li>
							<b>JavaScript</b> - element creation and manipulation via DOM, style manipulation, event listeners, JSON processing and file uploading, 'drag-n-drop' functionality, 
							theoretical knowledge of asynchronious programming and 'promises' in JS;
						</li>
						<li>
							<b>React.js</b> - my main tool; creation of functional or class components for modular approach, utilizing React states and hooks, using React Router for SPA;
							<br/><em>This whole web-site and it's sub-pages was written with React.js in JSX language</em>
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

export default MoreInfo;