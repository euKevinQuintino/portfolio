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
