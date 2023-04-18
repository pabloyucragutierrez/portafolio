document.addEventListener("click",e=>{
    if (e.target.matches(".img-cv")) {  
        if (!e.target.fullscreenElement) {
            e.target.requestFullscreen();
         } 
        }
})