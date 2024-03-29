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

function toHome() {
  window.location.reload();
}

var AlternaRetornarAoTopo = function () {
  if (window.scrollY <= 69) {
    document.querySelector(".back-to-top").style.display = "none";
  } else {
    document.querySelector(".back-to-top").style.display = "block";
  }
};
window.addEventListener("scroll", AlternaRetornarAoTopo);

function RolarPara(id) {
  document.getElementById(id).scrollIntoView(true);
}

function MostrarMais(secao) {
  if (secao == 'certificados') {
    document.querySelector(".under-the-fold__achievements__certifications").style.maxHeight = "100%";
    document.querySelector(".under-the-fold__achievements__books").style.marginTop = "0px";
    document.querySelector("#mostrarMaisCertificados").style.display = "none";
  }
  if (secao == 'livros') {
    document.querySelector(".under-the-fold__achievements__books").style.maxHeight = "100%";
    document.querySelector("#mostrarMaisLivros").style.display = "none";
  }
}
