const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const cirlces = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;

	if (currentActive > cirlces.length) {
		currentActive = cirlces.length;
	}
	update();
});

prev.addEventListener('click', () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}
	update();
});

function update() {
	cirlces.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');

	progress.style.width = `${
		((actives.length - 1) / (cirlces.length - 1)) * 100
	}%`;

	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === cirlces.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}

	console.log(((actives.length - 1) / (cirlces.length - 1)) * 100);
}
