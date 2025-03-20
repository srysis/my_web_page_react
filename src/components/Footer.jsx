import github_icon from "../files/github-mark-white.svg"

function Footer() {
	return (
		<footer>
			<div className="flex_container">
				<div className="left">
					<div>
						<img src={github_icon} /><span><a href="https://github.com/srysis/my_web_page_react" target="_blank">Source code</a></span>
					</div>
				</div>
				<div className="right">
					<div>
						<span className="git"><a href="https://github.com/srysis" target="_blank">GitHub</a></span>
					</div>
					<div>
						<span><a href="https://www.linkedin.com/in/denys-yarymovych-226823327/" target="_blank">LinkedIn</a></span>
					</div>
					<div>
						<span><em>denys.yarymovych@gmail.com</em></span>
					</div>
				</div>
			</div>
			<hr />
			<div id="copyright">
				<p>All available materials are used for educational purposes only. If you have any problems, please contact me.</p>
			</div>
		</footer>
	) 
}

export default Footer