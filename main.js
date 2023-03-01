function creaeTarea(tarea) {
    const contenedor=document.querySelector("section");
    const Tarea=    `<section class="lista">
                        <input type="checkbox" id="check">
                        <span> ${tarea} </span>
                        <a href="javascript:void(0);" class="material-icons" onclick="eliminarTarea(event)">delete_outlined</a>
                    </section>`
    contenedor.insertAdjacentHTML("afterend",Tarea);
}
function eliminarTarea(event) {
    let contenedor=document.querySelector(".contenedor");
    contenedor.removeChild(event.target.parentElement);
}
document.querySelector("#button").addEventListener("click",(event)=>{
    event.preventDefault();
    const tarea=document.querySelector("#tarea");
    if (tarea.value != "") {
       creaeTarea(tarea.value);
       tarea.value="";
    }
})
