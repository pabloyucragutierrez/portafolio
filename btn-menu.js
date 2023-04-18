document.addEventListener("click",e=>{
    let header = document.querySelector(".header")
    let close  = document.querySelector(".btn-menu-close")
    if(e.target.matches(".btn-menu")){
        header.classList.toggle("links-mostrar")
        close.style.zIndex ="100"
    }
    if (e.target.matches(".link")) {
        header.classList.remove("links-mostrar")
        close.style.zIndex ="99"
    }
    if (e.target.matches(".btn-menu-close")) {
        header.classList.remove("links-mostrar")
        close.style.zIndex ="99"
    }
})