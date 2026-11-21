const buscador = document.getElementById("buscador");
const categorias = document.querySelectorAll(".caja-desplegable");

buscador.addEventListener("input", function(e) {
    const textoBusqueda = e.target.value.toLowerCase();
    categorias.forEach(categoria => {
        const contenidoCategoria = categoria.textContent.toLowerCase();
        if (contenidoCategoria.includes(textoBusqueda)) {
            categoria.style.display = "block";
        } else {
            categoria.style.display= "none";
        }
    })
})
