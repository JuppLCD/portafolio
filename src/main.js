import './sass/main.scss';
import { proyectInfo } from './data';

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
		template.querySelector('.modal-body h6').textContent = data.technologies;
		template.querySelector('.modal-body p').innerHTML = data.description;
		template.querySelector('.modal-body a.btn-warning').href = data.demo;
		template.querySelector('.modal-body a.btn-light').href = data.code;

		const clone = template.cloneNode(true);
		fragment.appendChild(clone);

		modal.querySelector('.modal-dialog').innerHTML = '';
		modal.querySelector('.modal-dialog').appendChild(fragment);
	}
});
