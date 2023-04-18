    
let contenedor = document.querySelector(".contenedor")
 

const getHTML = (options)=>{
    let {url, success, error} = options
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange",e=>{
        if(xhr.readyState!==4)return
        if(xhr.status >= 200 && xhr.status<300){
            let html = xhr.responseText
            success(html)
        }else{
            error(`ocurrió un error al solicitar los datos <b>${xhr.status}: ${xhr.statusText}</b>`)
        }
    })
    xhr.open("GET", url)
    xhr.setRequestHeader("content-type", "text/html; charset=utf-8")
    xhr.send()
}
document.addEventListener("DOMContentLoaded",e=>{
    getHTML({
        url: "assets/inicio.html",
        success: res=> contenedor.innerHTML = res,
        error: err=> contenedor.innerHTML = err
    })
})
        
   document.addEventListener("click",e=>{
    if(e.target.matches(".link")){
        e.preventDefault()
        getHTML({
            url: e.target.href,
            success: res=> contenedor.innerHTML = res,
            error: err=> contenedor.innerHTML = err
        })
    }
   })


   setTimeout(() => {
    let links = document.querySelectorAll(".link")
       links.forEach(el => {
           el.addEventListener("click",e=>{
            links.forEach(el=> el.classList.remove("active"))
               el.classList.add("active")
            })
        });
    }, 100);

    