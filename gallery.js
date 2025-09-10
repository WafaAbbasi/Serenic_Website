// navbar
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("active"), navbar.classList.toggle("active")
});
// filterable photo gallery
const filterContainer = document.querySelector(".gallery-filter"),
	galleryItems = document.querySelectorAll(".gallery-item");
filterContainer.addEventListener("click", e => {
	if (e.target.classList.contains("filter-item")) {
		filterContainer.querySelector(".active").classList.remove("active"), e.target.classList.add("active");
		const t = e.target.getAttribute("data-filter");
		galleryItems.forEach(e => {
			e.classList.contains(t) || "all" === t ? (e.classList.remove("hide"), e.classList.add("show")) : (e.classList.remove("show"), e.classList.add("hide"))
		})
	}
})
