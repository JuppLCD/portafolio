import './sass/main.scss';

const portafolio = document.getElementById('portafolio');
portafolio.addEventListener('click', (e) => {
	if (e.target.classList.contains('card-img') || e.target.classList.contains('card-img-overlay')) {
		e.target.parentNode.querySelector('.card-img-overlay').classList.toggle('active');
	}
});
