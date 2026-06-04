const bTnOco = document.getElementById("bTnOco")
const popupoco = document.getElementById("popup-oco")
const fecharoco = document.getElementById("fecharoco")
const spanstatus = document.getElementById("spanstatus")
const datadata = document.querySelectorAll(".data-data")

bTnOco.addEventListener("click", ()=>{
    popupoco.classList.toggle("desactive")
})
fecharoco.addEventListener("click", ()=>{
    popupoco.classList.toggle("desactive")
})

//console.log(spanstatus.dataset.value)
if(spanstatus.dataset.value == "aberto"){
    spanstatus.style.backgroundColor = "grey"
}else if(spanstatus.dataset.value == "em andamento"){
    spanstatus.style.backgroundColor = "cyan"
}else{
    spanstatus.style.backgroundColor = "greenyellow"
}

datadata.forEach(dt =>{
    let data = [ano, mes, dia] = dt.dataset.data.split("-")
    data = `${dia}/${mes}/${ano}`
    dt.innerHTML = "<span class='negrito'>Data: </span>"+data
})


