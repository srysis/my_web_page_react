import React from "react"
import { Link } from "react-router-dom"

import "../style/error404.css"

function NotFoundPage() {
	return(
		<div id="error_container">
			<h1>404 Not Found</h1>
			<p>Looks like you are lost...</p>
			<Link to="/">Press here to come back</Link>
		</div>
	)
}

export default NotFoundPage;