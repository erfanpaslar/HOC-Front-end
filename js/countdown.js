
window.addEventListener("load", () => {
	
	
	const elDays = document.querySelector(".days");
	const elHours = document.querySelector(".hours");
	const elMinutes = document.querySelector(".minutes");
	const elSeconds = document.querySelector(".seconds");

	
	const date1 = new Date();
	const date2 = new Date("2021-09-02");
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	


	let timeLeft = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	let totalSeconds = 0;

	let futureDate = new Date();
	futureDate.setDate(futureDate.getDate() +diffDays);
	futureDate.setHours(0);
	futureDate.setMinutes(0);
	futureDate.setSeconds(0);

	function init() {
		totalSeconds = Math.floor((futureDate - new Date()) / 1000);
		setTimeLeft();
		let interval = setInterval(() => {
			if (totalSeconds < 0) {
				clearInterval(interval);
			}
			countTime();
		}, 1000);
	}

	function countTime() {
		if (totalSeconds > 0) {
			--timeLeft.seconds;
			if (timeLeft.minutes >= 0 && timeLeft.seconds < 0) {
				timeLeft.seconds = 59;
				--timeLeft.minutes;
				if (timeLeft.hours >= 0 && timeLeft.minutes < 0) {
					timeLeft.minutes = 59;
					--timeLeft.hours;
					if (timeLeft.days >= 0 && timeLeft.hours < 0) {
						timeLeft.hours = 23;
						--timeLeft.days;
					}
				}
			}
		}
		--totalSeconds;
		printTime();
	}

	function printTime() {
		animateFlip(elDays, timeLeft.days);
		animateFlip(elHours, timeLeft.hours);
		animateFlip(elMinutes, timeLeft.minutes);
		animateFlip(elSeconds, timeLeft.seconds);
	}

	function animateFlip(element, value) {
		const valueInDom = element.querySelector(".bottom-back").innerText;
		const currentValue = value < 10 ? "0" + value : "" + value;

		if (valueInDom === currentValue) return;

		element.querySelector(".top-back span").innerText = currentValue;
		element.querySelector(".bottom-back span").innerText = currentValue;

		gsap.to(element.querySelector(".top"), 0.7, {
			rotationX: "-180deg",
			transformPerspective: 300,
			ease: Quart.easeOut,
			onComplete: function () {
				element.querySelector(".top").innerText = currentValue;
				element.querySelector(".bottom").innerText = currentValue;
				gsap.set(element.querySelector(".top"), { rotationX: 0 });
			}
		});

		gsap.to(element.querySelector(".top-back"), 0.7, {
			rotationX: 0,
			transformPerspective: 300,
			ease: Quart.easeOut,
			clearProps: "all"
		});
	}

	function setTimeLeft() {
		timeLeft.days = Math.floor(totalSeconds / (60 * 60 * 24));
		timeLeft.hours = Math.floor((totalSeconds / (60 * 60)) % 24);
		timeLeft.minutes = Math.floor((totalSeconds / 60) % 60);
		timeLeft.seconds = Math.floor(totalSeconds % 60);
	}

	init();
});
