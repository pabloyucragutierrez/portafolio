document.addEventListener("click", e => {
    if (e.target.matches(".img-portada")) {
        window.open(e.target.dataset.name)            
    }
})