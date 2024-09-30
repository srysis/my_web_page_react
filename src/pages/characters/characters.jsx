import { useNavigate } from "react-router-dom" 

import Alice from "../../files/characters/Alice.gif"
import Jane from "../../files/characters/Jane.jpg"
import Pandemonica from "../../files/characters/Pandemonica.gif"
import Willow from "../../files/characters/Willow.png"

import "../../style/characters/characters.css"
import "../../style/characters/characters-phone.css"
import "../../style/shared.css"

function Characters() {
	const navigate = useNavigate();

	function goToCharacterPage(character_name) {
		switch (character_name) {
		case "Alice":
			navigate("/characters/alice");
			break;
		case "Jane":
			navigate("/characters/jane");
			break;
		case "Pandemonica":
			navigate("/characters/pandemonica");
			break;
		case "Willow":
			navigate("/characters/willow");
			break;
		}
	}

	return(
		<>
			<h1>Characters</h1>
			<h3>Here you can find some information about my favorite characters. These pages don't include all available information, just a general information and some little facts.</h3>
			<div id="flex_container">
				<div className="flex_column">
					<div className="link_to_character alice" onClick={() => goToCharacterPage("Alice")} >
						<img src={Alice} title="placeholder image" />
						<div className="text">
							<h3>Alice Liddell</h3>
							<p>Alice Liddell is a main character of video game series, created by American McGee.</p>
						</div>
					</div>
					<div className="link_to_character jane" onClick={() => goToCharacterPage("Jane")} >
						<img src={Jane} title="placeholder image" />
						<div className="text">
							<h3>Jane The Killer</h3>
							<p>Jane The Killer (real name - <em>Jane Richardson</em>) is a main character of the "Born of Science" creepypasta.</p>
						</div>
					</div>
				</div>
				<div className="flex_column">
					<div className="link_to_character pandemonica" onClick={() => goToCharacterPage("Pandemonica")} >
						<img src={Pandemonica} title="placeholder image" />
						<div className="text">
							<h3>Pandemonica</h3>
							<p>Pandemonica is a demon girl from Helltaker - a universe made by an artist VanRipper.</p>
						</div>
					</div>
					<div className="link_to_character willow" onClick={() => goToCharacterPage("Willow")} >
						<img src={Willow} title="placeholder image" />
						<div className="text">
							<h3>Willow</h3>
							<p>Willow is a character from a game franchise called Don't Starve.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Characters