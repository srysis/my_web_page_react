import { Link } from "react-router-dom"

import aside_button from "../files/bars-solid.svg"

function Aside({isVisible, toggleVisibility}) {
	function onInteractHandler() {
		toggleVisibility(!isVisible);
		document.body.style.overflow = isVisible ? "visible" : "hidden";
	}

	return (
		<aside>
			<button id="sidebar_toggle" className={isVisible ? "active" : "inactive"} onClick={onInteractHandler}><img src={aside_button} /></button>
			<div className={isVisible ? "overlay visible" : "overlay hidden"} onTouchStart={onInteractHandler} ></div>
			<div id="aside_content" className={isVisible ? "visible" : "hidden"}>
				<ul>
					<li><Link to="/portfolio" onClick={() => { onInteractHandler(); window.scrollTo(0, 0); } }>Portfolio</Link><hr /></li>
					<li><Link to="/about_me" onClick={() => { onInteractHandler(); window.scrollTo(0, 0); } }>About me</Link><hr /></li>
				</ul>
			</div>
		</aside>
	)
}

export default Aside;