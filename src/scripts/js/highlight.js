const highlights = document.querySelectorAll(".highlight");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      destacar(entry)
      entry.target.classList.toggle("highlight", entry.isIntersecting);
      console.log(entries)
      //if (entry.isIntersecting) observer.unobserve(entry.target)
    });
  },
  {
    threshold: 1,
    //rootMargin: "-300px",
  }
);

//observer.observe(highlights[0]);
highlights.forEach((highlight) => {
  console.log(highlight)
  observer.observe(highlight);
});


function destacar(elemento) {
  elemento.style.backgroundPosition = "-100% 0";
  setTimeout(function() {elemento.style.boxShadow = "rgba(47, 79, 79, 0.24) 1px 1px";}, 100);
}
/*
window.addEventListener('scroll', function() {
	var elemento = document.querySelector('.mark');
	var position = elemento.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
    setTimeout(function() {
      destacar(elemento)
    }, 1000);
	}
});*/
