const bTnIns = document.getElementById("bTnIns")
const fecharins = document.getElementById("fecharins")
const popupins = document.getElementById("popup-ins")
const spanstatus = document.getElementById("spanstatus")
const dataspan = document.getElementById("dataspan")

bTnIns.addEventListener("click", ()=>{
    popupins.classList.toggle("desactive")
})
fecharins.addEventListener("click", ()=>{
    popupins.classList.toggle("desactive")
})

if(spanstatus.dataset.value == "aberto"){
    spanstatus.style.backgroundColor = "grey"
}else if(spanstatus.dataset.value == "em andamento"){
    spanstatus.style.backgroundColor = "cyan"
}else{
    spanstatus.style.backgroundColor = "greenyellow"
}
if(dataspan.dataset.data){
    let data = [ano, mes, dia] = dataspan.dataset.data.split("-")
    data = `${dia}/${mes}/${ano}`
     dataspan.innerHTML = "<span style='font-weight: bold;'>Data da inspeção: </span> "+data;
}






