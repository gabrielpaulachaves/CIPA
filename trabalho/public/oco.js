const bTnOco = document.getElementById("bTnOco")
const popupoco = document.getElementById("popup-oco")
const fecharoco = document.getElementById("fecharoco")
const spanstatus = document.getElementById("spanstatus")
const datadata = document.getElementById("data-data")

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

if(datadata.dataset.data){
    let data = [ano, mes, dia] = datadata.dataset.data.split("-")
    data = `${dia}/${mes}/${ano}`
    datadata.innerHTML = "<span style='font-weight: bold;'>Data:</span> " +data;
}


