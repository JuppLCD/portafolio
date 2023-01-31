const proyectInfo = [
	{
		title: 'Harry-Potter',
		description:
			'Esta App Web fue hecha utilizando React + Typescript utilizando Vite en el frontend, el cual consume una api de <a style="color: #46ff57;" href="https://aztro.readthedocs.io/" target="_blank">Aztro</a> para tema del horoscopo y una api que hice utilizando json-server(<a style="color: #46ff57;" href="https://github.com/JuppLCD/Json-Server-HarryPotter" target="_blank">Code</a>) para obtener los datos de los personajes, frases y libros de la saga de Harry Potter.',
		demo: 'https://harry-potter-react-ts.netlify.app/',
		code: 'https://github.com/JuppLCD/Harry-Potter-ReactTS',
		keywords: 'Web App, React, Typescript, Bootstrap 5, Api de Harry Potter, json-server, NodeJS',
	},
	{
		title: 'Movies-Frontend',
		description:
			'Esta App Web fue hecha sobre una "plantilla" de una lista de reproducción de "Yoelvis Mulen { code }" sobre aprender React. <br/><br/> Lo modifique al agregarle Typescript utilizando Vite en el frontend, esta consume una api de <a style="color: #46ff57;" href="https://www.themoviedb.org/" target="_blank">TheMovieDB</a> para obtener los datos de las películas, utilizando Bootstrap 5 para facilitar el diseño y un poco de Sass para modificar un poco las variables de esta. Agregue un login, para que el usuario tenga las funcionalidades de un CRUD mediante listas de películas. Además, utiliza una librería de notificaciones para informar al usuario de sus acciones.',
		demo: 'https://movies-jupplcd.netlify.app/',
		code: 'https://github.com/JuppLCD/Movies-Frontend',
		keywords: 'Web App, React, Typescript, Bootstrap 5, Api de TheMovieDB, Sass, React-Hot-Toas',
	},
	{
		title: 'Movies-Backend',
		description:
			'Es un servidor en NodeJS utilizando Express y un ORM (Sequelize) para manejar la DB en MySQL. <br/> Esta contiene una api para manejar usuarios (login, singup) utilizando JWT para manejar la cesión y bcryptjs para encriptar la contraseña del usuario antes de guardarla en la DB, además de una api tipo CRUD respecto a listas de películas para la App Web Movies que se puede ver en la demo.',
		demo: 'https://movies-jupplcd.netlify.app/',
		code: 'https://github.com/JuppLCD/Movies-app-backend',
		keywords: 'NodeJS, Express, hapi/boom, Joi (validator Schema), MySQL, Sequelize, jsonwebtoken, bcryptjs',
	},
	{
		title: 'Meme-Generator',
		description:
			'Esta AppWeb fue creada principalmente para comprender y profundizar un poco mas sobre el manejo de imagenes desde el frontend y su envio a el backend para almacenarlas y/o eliminarlas. Posteriormente aprendi como guardad esas imagenes en una nube, en este caso utilizando Firebase Storage. <br/>En en frontend utilize React + TypeScript + Vite + Redux/toolkit + TailwindCSS. En el backend utilize NodeJS desarrollandolo con TypeScript utilizando nodemon + ts-node, de DB MySQL utilizando el ORM de Sequelize, multer para el manejo de imagnes y firebase-admin para su almacenamiento en la nube (Firebase Storage).',
		demo: 'https://memes-react-redux.netlify.app/',
		code: 'https://github.com/JuppLCD/Memes-react-redux-ts',
		keywords: 'Web App, React, Typescript, TailwindCSS, Vite, Redux/toolkit, Api Memes, Api Backend NodeJS',
	},
	{
		title: 'Meme-Generator-Backend',
		description:
			'Backend para almacenar y/o eliminar imagenes (memes). Posteriormente aprendi como guardad esas imagenes en una nube, en este caso utilizando Firebase Storage. <br/>Utilize NodeJS desarrollandolo con TypeScript utilizando nodemon + ts-node, de DB MySQL utilizando el ORM de Sequelize, multer para el manejo de imagnes y firebase-admin para su almacenamiento en la nube (Firebase Storage).',
		demo: 'https://memes-react-redux.netlify.app/',
		code: 'https://github.com/JuppLCD/Memes-Backend-TS',
		keywords:
			'NodeJS, Express, hapi/boom, MySQL, Sequelize, User session, Typescript, Firebase Storage, Multer, , jsonwebtoken, bcryptjs',
	},
	{
		title: 'YT-Notes-Frontend',
		description:
			'La aplicación web se creó en Vue 3 para aprender este framework. Esta aplicación le permite crear un usuario y tomar notas de un video en YouTube. Para ello, debes tomar el enlace de un video de youtube, colocar un input para luego reproducirlo y tomar notas sobre él. El usuario puede crear listas de notas donde luego se guardarán las notas, permitiéndole al usuario organizar sus ideas.',
		demo: 'https://yt-notes-vue-jupplcd.netlify.app',
		code: 'https://github.com/JuppLCD/Notes-Youtube-Vue',
		keywords: 'Web App | Vue 3 | Typescript | TailwindCSS | Vue-router | Vuex | Api Backend en laravel | Axios',
	},
	{
		title: 'YT-Notes-Backend',
		description:
			'Este proyecto es una API Rest hecha en Laravel con la finalidad de aprender sobre este framework y servir de datos a un proyecto creado en Vue 3. Este servidor te permite crear un usuario, un CRUD de notas sobre un video de YouTube, así como un CRUD de lista de notas.',
		demo: 'https://notes-youtube-backend-laravel-production.up.railway.app',
		code: 'https://github.com/JuppLCD/Notes-Youtube-Backend-Laravel',
		keywords: 'PHP | Laravel | MySQL | User session',
	},
	{
		title: 'Rick-and-Morty',
		description:
			'Se utilizo la api de Rick and Morty para crear este proyecto, con la finalidad de aprender a comunicarme con apis, realizar scroll infinito y realizar busquedas con a la api y posteriormete realizar filtrado. Se utilizo React JS con Typescript, reemplaze Bootstrap y Sass con Tailwind CSS para probar este framework CSS',
		demo: 'https://rick-and-morty-jupplcd.netlify.app/',
		code: 'https://github.com/JuppLCD/rick-and-morty',
		keywords: 'Web App, React, Api Rick and Morty, Tailwind CSS, Typescript',
	},
	{
		title: 'Chat-App-Sockets',
		description:
			'El código original de esta app no ha sido creado por mi, sino que este ha sido modificado y refactorizado por mi. Más info en el README del repositorio de este proyecto en github. <br/> <br/> Básicamente esta app utilizaba http para hacer el pedido al backend en PHP y lo cambie a Sockets con la librería Reatchet, además quería usar POO por lo que pase mucha lógica a Clases (ya que nunca lo había utilizado), aunque lo hice sin mucha idea de las buenas prácticas de POO en PHP <b> (me encuentro mejorando en el POO a la vez que estoy aprendiendo Laravel)</b>',
		demo: 'https://github.com/JuppLCD/Chat-App-PHP',
		code: 'https://github.com/JuppLCD/Chat-App-PHP',
		keywords: 'PHP, MySQL, Ratchet, Sockets, Session',
	},
];

const portafolio = document.getElementById('portafolio');

const modal = document.getElementById('proyectInfoModal');
const template = document.getElementById('proyectInfoTemplate').content;

portafolio.addEventListener('click', (e) => {
	if (
		e.target.tagName === 'ARTICLE' ||
		e.target.parentNode.tagName === 'ARTICLE' ||
		e.target.parentNode.parentNode.tagName === 'ARTICLE' ||
		e.target.parentNode.parentNode.parentNode.tagName === 'ARTICLE'
	) {
		let articleElement = e.target;
		while (articleElement.tagName !== 'ARTICLE') {
			articleElement = articleElement.parentNode;
		}
		const fragment = document.createDocumentFragment();

		const titleProyect = articleElement.dataset.proyect;
		const data = proyectInfo.filter((proyect) => proyect.title === titleProyect)[0];

		template.querySelector('.modal-title span').textContent = data.title;
		template.querySelector('.modal-body h6').textContent = data.keywords;
		template.querySelector('.modal-body p').innerHTML = data.description;
		template.querySelector('.modal-body a.btn-warning').href = data.demo;
		template.querySelector('.modal-body a.btn-outline-light').href = data.code;

		const clone = template.cloneNode(true);
		fragment.appendChild(clone);

		modal.querySelector('.modal-dialog').innerHTML = '';
		modal.querySelector('.modal-dialog').appendChild(fragment);
	}
});
