
function Header( {all_animations_played} ) {

	return (
		<header>
			<div className={all_animations_played ? "left_block animated" : "left_block"}>
				<div id="welcome">
					<span>WELCOME</span>
					<span>TO</span>
					<span className="underlined">MY PAGE</span>
				</div>
			</div>
		</header>
	) 
}

export default Header