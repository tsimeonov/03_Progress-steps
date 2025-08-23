const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelector('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;

	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	// console.log(currentActive);

	update();
});
