document.addEventListener("DOMContentLoaded",e=>{
    const getHTML = (el, url)=>{
        const xhr = new XMLHttpRequest()
        xhr.addEventListener("readystatechange",e=>{
            if(xhr.readyState!==4) return
            if(xhr.status >= 200 && xhr.status<300){
                el.outerHTML = xhr.responseText
            }else{
                el.outerHTML = `ocurrió un error al solicitar los datos <b>${xhr.status}: ${xhr.statusText}</b>`
            }
        })
        xhr.open("GET",url)
        xhr.setRequestHeader("content-type", "text/html; charset=utf-8")
        xhr.send()
    }
    document.querySelectorAll("[data-content]").forEach(el=> getHTML(el, el.getAttribute("data-content")))
});
