const bTnAnot = document.getElementById("bTnAnot")
const popupanot = document.getElementById("popup-anot")
const fecharanot = document.getElementById("fecharanot")

bTnAnot.addEventListener("click", ()=>{
    console.log("oi")
    popupanot.classList.toggle("desactive")  
})
fecharanot.addEventListener("click", ()=>{
    popupanot.classList.toggle("desactive") 
})



