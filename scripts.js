// navbar
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("active"), navbar.classList.toggle("active")
});
// video slider background
const btns = document.querySelectorAll(".nav-btn"),
	video = document.querySelectorAll(".videos"),
	contents = document.querySelectorAll(".content");
let sliderNav = function(e) {
	btns.forEach(e => {
		e.classList.remove("active")
	}), video.forEach(e => {
		e.classList.remove("active")
	}), contents.forEach(e => {
		e.classList.remove("active")
	}), btns[e].classList.add("active"), video[e].classList.add("active"), contents[e].classList.add("active")
};
btns.forEach((e, t) => {
	e.addEventListener("click", () => {
		sliderNav(t)
	})
});
