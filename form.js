document.addEventListener("submit",e=>{
    if (e.target.matches(".form")) {
        e.preventDefault()
        let loader = document.querySelector(".loader-form"),
        text = document.querySelector(".text-form"),
        textError = document.querySelector(".text-form-error"),
        inputs = document.querySelectorAll(".input-form")
        loader.style.display ="block"
        function loadFormulario() {   
            fetch("https://formsubmit.co/ajax/gutierrezpablo678@gmail.com",{
                method:"POST",
                body: new FormData(e.target)
            })
            .then(res=> res.ok ? res.json(): Promise.reject(res))
            .then(json=>{
                text.textContent ="formulario enviado con éxito"
                loader.style.display ="none"
                e.target.reset()
            })
            .catch(err=>{
                loader.style.display ="none"
                text.textContent = `error ${err.status}: ${err.statusText}`
            })
            .finally(()=> setTimeout(() => {
                text.innerHTML =""
            }, 3000))   
        }
        let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-\s]+)*$/,
        regExp2 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        if (regExp.test(e.target.email.value) && regExp2.test(e.target.nombre.value)){
            textError.textContent = ""
            inputs.forEach(el => el.classList.remove("error"));
            loadFormulario()
        }else{
            loader.style.display ="none"
            inputs.forEach(el => el.classList.add("error"));
            textError.textContent = "llenaste mal los datos del formulario, inténtalo nuevamente"
          }      
    }
})