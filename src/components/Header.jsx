import { Link } from "react-router-dom"

function Header() {
	return (
		<>
			<header>
				<h1>
					<Link to="/" id="index_link">My personal web-site</Link>
				</h1>
				<nav>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/about_me">About me</Link>
				</nav>
			</header>
			<hr className="header_hr" />
		</>
	) 
}

export default Header