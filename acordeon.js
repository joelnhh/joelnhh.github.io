const acordeones = document.querySelectorAll(".acordeon");

acordeones.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("activo");
    const respuesta = this.nextElementSibling;
    if (respuesta.style.maxHeight) {
      respuesta.style.maxHeight = null;
    } else {
      respuesta.style.maxHeight = respuesta.scrollHeight + "px";
    }
  });
});
