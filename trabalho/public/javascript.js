/*------------------------------  PAGINA ANOTAÇÃO   -----------------------------------*/

const bTnAnot = document.getElementById("bTnAnot")
const popupanot = document.getElementById("popup-anot")
const fechar = document.getElementById("fechar")

bTnAnot.addEventListener("click", ()=>{
        popupanot.classList.toggle("desactive")  
})
fechar.addEventListener("click", ()=>{
    popupanot.classList.toggle("desactive") 
})
