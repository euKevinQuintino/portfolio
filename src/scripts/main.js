function toHome() {
    //window.location.href = "/dist/"
    document.body.classList.toggle("dark");
}
function scrollToSectionTwo() {
    document.querySelector("#sectionTwo").scrollIntoView({ behavior: 'smooth', block: 'start' });
}