import React, { useEffect, useState } from 'react';

export default function Home() {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.onscroll = () => {
			let height =
				document.querySelector('.page').scrollHeight -
				document.querySelector('.paralax').scrollHeight;
			let s = window.pageYOffset;
			let w = document.querySelector('.page').scrollWidth;
			let h = document.querySelector('.content').scrollHeight;
			let h_b = document.querySelector('.paralax').scrollHeight;
			let p = (s / h) * 100;
			let p_b = (s / h_b) * 100;
			let o = 1 - (1 / 100) * p_b;
			let z_1 = 1 + (w / 10000) * p_b;
			let z_2 = 1 + window.pageYOffset / height;
			let hr = (w / 2000) * p_b;
			let z_3 = 1 + w * 0.000005 * p_b;
			let hl = (w / 1500) * p_b;
			let z_4 = 1 + w * 0.00001 * p_b;

			setOffset(window.pageYOffset);

			document.querySelector('.paralax-fog').style.transform = `scale(${z_1})`;
			document.querySelector('.paralax-fog').style.opacity = o;
			document.querySelector(
				'.paralax-mountain-1'
			).style.transform = `scale(${z_2})`;
			document.querySelector(
				'.paralax-mountain-2'
			).style.transform = `translate3d(${hr}px, 0, 0) scale(${z_3})`;
			document.querySelector(
				'.paralax-mountain-3'
			).style.transform = `translate3d(${hl}px, 0, 0) scale(${z_4})`;
			console.log(z_3);
		};
	}, []);

	// console.log(offset);

	return (
		<div className='wrapper'>
			<div className='page'>
				<div className='paralax'>
					<div className='paralax-mountain paralax-mountain-1'></div>
					<div className='paralax-mountain paralax-mountain-2'></div>
					<div className='paralax-mountain paralax-mountain-3'></div>
					<div className='paralax-fog'></div>
				</div>
				<div className='content'>
					<div className='content-body'>
						<div className='content-header'>
							<h1 className='content-title'>Mountain</h1>
							<h2 className='content-subtitle'>Parallax mountain</h2>
						</div>
						<div className='content-article'>
							<p>
								Amet anim est voluptate ut et ipsum do irure elit. Nostrud ut
								cillum elit sunt esse pariatur culpa Lorem sunt nisi sint magna
								et. Minim incididunt voluptate laboris ex quis. Nisi aliqua
								aliquip deserunt id sit ea id. Eiusmod dolor mollit exercitation
								nisi aliqua ipsum ut eiusmod. Magna qui magna aliqua ea duis
								tempor magna occaecat Lorem consectetur ut eu nostrud dolore.
								Velit Lorem commodo exercitation enim velit ipsum ad cillum in
								officia. Anim exercitation officia culpa Lorem consequat sit.
								Culpa nulla sint voluptate pariatur est excepteur id esse do ut
								ex eu. Velit cillum enim voluptate ullamco mollit labore dolore.
								Dolor ex exercitation amet occaecat est. Ullamco commodo tempor
								sit sunt tempor consequat esse non cupidatat proident cupidatat.
								Amet culpa adipisicing eu cillum aliqua adipisicing. Dolor in ut
								sint irure laborum fugiat enim et pariatur elit. Do ipsum
								nostrud ullamco ullamco mollit. Dolor commodo in fugiat
								consequat consequat quis ut ea ipsum officia deserunt dolor
								esse. Mollit sunt ex sint minim ea cupidatat laborum consectetur
								ut aute aliqua non aute dolore. Est commodo amet culpa
								incididunt labore eiusmod laboris exercitation commodo. Duis
								nulla sit est officia eu. Exercitation laboris qui quis duis
								cupidatat minim eu dolor non nulla. Ex magna labore excepteur
								velit ipsum adipisicing nisi pariatur Lorem id. Nisi aliqua
								laborum duis elit consequat adipisicing pariatur consectetur
								nisi irure officia adipisicing aliqua. Consequat reprehenderit
								eu dolore exercitation pariatur id. Laboris reprehenderit
								excepteur anim consectetur adipisicing ea occaecat Lorem veniam
								id occaecat. Amet excepteur ea deserunt commodo. Eiusmod nisi
								duis mollit amet veniam proident ipsum do voluptate nostrud. Id
								pariatur qui minim laborum amet tempor. Minim reprehenderit ea
								nulla consectetur veniam minim minim culpa pariatur nisi eiusmod
								anim exercitation. Laboris ullamco excepteur ipsum est culpa
								cillum qui voluptate fugiat nostrud veniam enim exercitation
								ullamco. Non ex nulla id aute minim ea tempor magna officia duis
								laboris ea elit. Pariatur deserunt laborum laborum tempor mollit
								aliqua fugiat. Sit pariatur occaecat aute veniam deserunt non
								anim consectetur officia do mollit labore dolor. Cupidatat ex
								culpa fugiat enim laboris adipisicing nulla labore nulla mollit.
								Nisi dolore commodo qui deserunt nisi labore veniam ullamco
								fugiat voluptate aliqua Lorem ea aute. Incididunt est consequat
								duis nostrud. Elit enim irure aliquip qui laborum ullamco
								veniam. Incididunt minim veniam exercitation veniam aliquip.
								Duis quis aute nulla labore fugiat exercitation deserunt eiusmod
								ipsum minim pariatur eu. Sunt duis tempor aliqua dolor elit
								irure dolor magna. Ut Lorem nisi aliquip velit adipisicing
								cillum sint aliquip esse. Quis mollit ex id laboris enim
								consectetur deserunt adipisicing ex. Laborum tempor
								reprehenderit ullamco ea cupidatat nostrud in dolore dolor ea.
								Deserunt irure dolore fugiat veniam laborum excepteur laboris
								officia mollit reprehenderit consectetur laboris. Nisi quis
								reprehenderit aliquip non laboris anim sit velit. Et occaecat
								fugiat duis adipisicing dolor pariatur ex do. Eiusmod magna
								consectetur non nostrud sit nostrud anim occaecat dolore minim.
								Anim sit id et commodo elit tempor est cillum aute. Duis qui
								anim commodo nisi in ullamco aute voluptate cillum in
								adipisicing. Qui mollit occaecat mollit et excepteur. Lorem
								deserunt in sunt consequat ea non. Ex est est voluptate proident
								duis labore pariatur. Ea aliqua velit sint minim culpa non
								labore excepteur amet eu sit velit. Et duis esse laboris
								pariatur qui fugiat aute. Cupidatat enim ex non voluptate.
							</p>
							<p>
								Amet anim est voluptate ut et ipsum do irure elit. Nostrud ut
								cillum elit sunt esse pariatur culpa Lorem sunt nisi sint magna
								et. Minim incididunt voluptate laboris ex quis. Nisi aliqua
								aliquip deserunt id sit ea id. Eiusmod dolor mollit exercitation
								nisi aliqua ipsum ut eiusmod. Magna qui magna aliqua ea duis
								tempor magna occaecat Lorem consectetur ut eu nostrud dolore.
								Velit Lorem commodo exercitation enim velit ipsum ad cillum in
								officia. Anim exercitation officia culpa Lorem consequat sit.
								Culpa nulla sint voluptate pariatur est excepteur id esse do ut
								ex eu. Velit cillum enim voluptate ullamco mollit labore dolore.
								Dolor ex exercitation amet occaecat est. Ullamco commodo tempor
								sit sunt tempor consequat esse non cupidatat proident cupidatat.
								Amet culpa adipisicing eu cillum aliqua adipisicing. Dolor in ut
								sint irure laborum fugiat enim et pariatur elit. Do ipsum
								nostrud ullamco ullamco mollit. Dolor commodo in fugiat
								consequat consequat quis ut ea ipsum officia deserunt dolor
								esse. Mollit sunt ex sint minim ea cupidatat laborum consectetur
								ut aute aliqua non aute dolore. Est commodo amet culpa
								incididunt labore eiusmod laboris exercitation commodo. Duis
								nulla sit est officia eu. Exercitation laboris qui quis duis
								cupidatat minim eu dolor non nulla. Ex magna labore excepteur
								velit ipsum adipisicing nisi pariatur Lorem id. Nisi aliqua
								laborum duis elit consequat adipisicing pariatur consectetur
								nisi irure officia adipisicing aliqua. Consequat reprehenderit
								eu dolore exercitation pariatur id. Laboris reprehenderit
								excepteur anim consectetur adipisicing ea occaecat Lorem veniam
								id occaecat. Amet excepteur ea deserunt commodo. Eiusmod nisi
								duis mollit amet veniam proident ipsum do voluptate nostrud. Id
								pariatur qui minim laborum amet tempor. Minim reprehenderit ea
								nulla consectetur veniam minim minim culpa pariatur nisi eiusmod
								anim exercitation. Laboris ullamco excepteur ipsum est culpa
								cillum qui voluptate fugiat nostrud veniam enim exercitation
								ullamco. Non ex nulla id aute minim ea tempor magna officia duis
								laboris ea elit. Pariatur deserunt laborum laborum tempor mollit
								aliqua fugiat. Sit pariatur occaecat aute veniam deserunt non
								anim consectetur officia do mollit labore dolor. Cupidatat ex
								culpa fugiat enim laboris adipisicing nulla labore nulla mollit.
								Nisi dolore commodo qui deserunt nisi labore veniam ullamco
								fugiat voluptate aliqua Lorem ea aute. Incididunt est consequat
								duis nostrud. Elit enim irure aliquip qui laborum ullamco
								veniam. Incididunt minim veniam exercitation veniam aliquip.
								Duis quis aute nulla labore fugiat exercitation deserunt eiusmod
								ipsum minim pariatur eu. Sunt duis tempor aliqua dolor elit
								irure dolor magna. Ut Lorem nisi aliquip velit adipisicing
								cillum sint aliquip esse. Quis mollit ex id laboris enim
								consectetur deserunt adipisicing ex. Laborum tempor
								reprehenderit ullamco ea cupidatat nostrud in dolore dolor ea.
								Deserunt irure dolore fugiat veniam laborum excepteur laboris
								officia mollit reprehenderit consectetur laboris. Nisi quis
								reprehenderit aliquip non laboris anim sit velit. Et occaecat
								fugiat duis adipisicing dolor pariatur ex do. Eiusmod magna
								consectetur non nostrud sit nostrud anim occaecat dolore minim.
								Anim sit id et commodo elit tempor est cillum aute. Duis qui
								anim commodo nisi in ullamco aute voluptate cillum in
								adipisicing. Qui mollit occaecat mollit et excepteur. Lorem
								deserunt in sunt consequat ea non. Ex est est voluptate proident
								duis labore pariatur. Ea aliqua velit sint minim culpa non
								labore excepteur amet eu sit velit. Et duis esse laboris
								pariatur qui fugiat aute. Cupidatat enim ex non voluptate.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
