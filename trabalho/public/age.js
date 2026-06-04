const bTnAge = document.getElementById("bTnAge")
const popupage = document.getElementById("popup-age")
const fecharAge = document.getElementById("fecharAge")
const datagedata = document.querySelectorAll(".datagedata")
const datagehora = document.querySelectorAll(".datagehora")

bTnAge.addEventListener("click", ()=>{
    popupage.classList.toggle("desactive")
})
fecharAge.addEventListener("click", ()=>{
    popupage.classList.toggle("desactive")
})

datagedata.forEach(d => {
    if(d.dataset.data){
    let data = [ano, mes, dia] = d.dataset.data.split("-")
    data = `${dia}/${mes}/${ano}`
    d.innerHTML = "<span class='negrito'>Data: </span>"+data
    }
});
datagehora.forEach(h =>{
    if(h.dataset.hora){
        let horario = [hora, min, seg] = h.dataset.hora.split(":")
        horario = `${hora}:${min}`
        h.innerHTML = "<span class='negrito'>Horário: </span>"+horario
    }
})






