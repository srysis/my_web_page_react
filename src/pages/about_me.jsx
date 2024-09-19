import { Link } from 'react-router-dom'

function AboutMe() {
	return (
		<>
			<h2 id="title">
				This page contains more personal information about me as a person, as well as my interests and a bit of life stories.
			</h2>
			<h3>About me:</h3>
			<p>
				My name is Denis, I go by nickname "srysis". I am a <ins title="At the time of writing it">twenty-one</ins> year old guy who wants to learn HTML, CSS and JavaScript 
				so I can become a web-developer and turn into a full-time job.
			</p>
			<p>
				I have a bachelor's degree in Software Engineering since I wanted to be a programmer, but as time went on I realized that advanced programming is not my passion, 
				so I decided to develop myself in Front-End, even though I liked programming. My favorite languages were C-family programming languages, but my first ever programming language was PASCAL. 
				I like C-family languages for their strict and more apparent code. I don't really like Python. While it is relatively easy to start programming on Python, 
				I often find myself being confused by it's statements and constructions. Eventually I stopped learning programming and focused more on expressing my creativity in a more obvious way.
			</p>
			<p>
				I mostly play games in free time. My favorite genre is action, if to be specific <abbr title="First-person shooter">FPS</abbr>. 
				I don't play too many games these days, but the ones I really enjoy include:
				<ul>
					<li><del>Team Fortress 2</del></li>
					<li>Warhammer: Vermintide 2</li>
					<li>Dead by Daylight</li>
					<li><del>Don't Starve Together</del></li>
					<li>Fallout 76</li>
				</ul>
			</p>
			<p>
				I've played more games through my lifespan, but these three are the main ones for me right now. Because I don't have a job yet and don't have any hobbies, I play very often. 
				I hope this will change some day.
			</p>
			<p>
				I rarely watch movies. Probably because I am not really excited about sitting in one place for almost two hours straight, but if I had to pick ones that I really like, these will be:
				<ul>
					<li>Addams Family(1991 and 1993)</li>
					<li>Charlie and the Chocolate Factory</li>
					<li>Firestarter</li>
					<li>What We Do in the Shadows</li>
					<li>The Master and Margarita</li>
					<li>Ringu (both parts, original japanese version)</li>
				</ul>
			</p>
			<p>
				I enjoy listening to music from time to time, but I don't really want to talk about it. I consider music to be something that is very personal, 
				so I won't go into detail about bands and genres that I like listening to.
			</p>
			<p>
				I really like modelling and animating, but I consider it a hobby and not a job. I am pretty familiar and comfortable with Blender. I made a game on Unity Engine as my graduation project. 
				It's a game about a girl fighting undead mobs, the test level was an abandoned graveyard, where skeletons would start appearing from their graves and attack the girl. 
				There was also a necromancer guy, who would summon skeletons after noticing her. 
				My inspiration were two games that I both consider the best and unique in their corresponding genres - first-person shooter Painkiller and action-platformer Alice: Madness Returns; 
				first game inspired me for level design, while the second one - main protagonist and combat/movement system. 
				I really enjoyed making it and I wanted to continue to improve it after the graduation, but time was short and other matters were at hand, so project sees no development for now. 
				<em>But maybe some day...</em>
			</p>
			<p>
				If you, by some chance, want to try it out, you can download the last playable build using 
				<a href="https://drive.google.com/file/d/1DLWaHVPh_8DpjDflodhaRjixQjnl7w5z/view?usp=drive_link" target="_blank"><em>this</em></a> 
				link, though I am not sure why you would want to do that. Keep in mind, that it is not very polished, so expect bugs and "clunkyness".
			</p>
			<p>
				For a long time in my life, I was using a program called <abbr title="Source Filmmaker">SFM</abbr>. 
				It's an animating/posing software that allows users to create their own 3D-artworks with assets from different games, made by Valve Corporation, more specifically Team Fortress 2. 
				However, it also allows using of custom assets made by it's community of artists that are being distrubuted on platform called Steam Workshop for free. 
				Using Source Filmmaker made me want to learn how models and textures are being made, so I even made my own version of certain character. 
				I liked how she turned out, although my life situation highly affected the creation of this character, so she was not the hero, but neither she was a villain. 
				She was more of an anti-hero archetype.
			</p>
			<p>
				There is a list of certain characters that pretty much defined my worldview. They also helped me in my most desperate times, so consider these my comfort characters. These are:
				<ul>
					<li><Link to="/characters/alice/" onClick={() => window.scrollTo(0, 0)} >Alice Liddell</Link>, American McGee's version</li>
					<li><Link to="/characters/willow" onClick={() => window.scrollTo(0, 0)} >Willow</Link> from Don't Starve</li>
					<li><Link to="/characters/pandemonica" onClick={() => window.scrollTo(0, 0)} >Pandemonica</Link> from Helltaker</li>
					<li><Link to="/characters/jane" onClick={() => window.scrollTo(0, 0)} >Jane</Link> from "Jane The Killer" creepypasta</li>
				</ul>
			</p>
			<p>You can click on one of their names to learn more about corresponding characters.</p>
			<p>
				That's pretty much it about me. I hope you found this short bio at least remotely interesting. Feel free to explore the rest of the web-site. Enjoy your stay.
			</p>
		</>
	)
}

export default AboutMe