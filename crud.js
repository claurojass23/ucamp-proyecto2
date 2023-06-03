const stars = document.querySelectorAll('.star');


stars.forEach(function(star, index){
    star.addEventListener('click', function(){
        for (let i=0; i<=index; i++){
            stars[i].classList.add('checked');
        }
        for (let i=index+1; i<stars.length; i++){
            stars[i].classList.remove('checked');
        }
    })
})

const comentarioInput = document.getElementById("inpuntcomment");
const lista = document.getElementById("comment");
let nombres = localStorage.getItem("nombres") ? JSON.parse(localStorage.getItem("nombres")) : [];
let editando = false;
let nombre_previo = "";



function agregarNombre() {
    if (editando) {
        console.log(nombre_previo);
        // Se esta usando un if ternario.
        comentario= comentario.map(nombreIndividual => nombreIndividual === nombre_previo ? nombreInput.value : nombreIndividual);
        localStorage.setItem("nombres", JSON.stringify(nombres));
        nombreInput.value = "";
        actualizarLista();
        editando = false;
    } else {
        const nombre = nombreInput.value;
        nombres.push(nombre);
        localStorage.setItem("nombres", JSON.stringify(nombres));
        nombreInput.value = "";
        actualizarLista();
    }

}


function actualizarLista() {
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("list-group-item");
        const btnEliminar = document.createElement("btnEliminar");

        const iconoBasura = document.createElement("i");
        iconoBasura.classList.add("fa", "fa-trash");
        btnEliminar.appendChild(iconoBasura);

        btnEliminar.classList.add("btn", "btn-danger", "float-right");
        btnEliminar.addEventListener("click", () => deleteIndividual(nombre));
        // btnEliminar.setAttribute("title", "Eliminar");
        // btnEliminar.textContent = "Eliminar";
        li.appendChild(btnEliminar);

        const btnedit = document.createElement("button");
        btnedit.classList.add("btn", "btn-warning", "float-right", "mr-2");

        const iconoEdit = document.createElement("i");
        iconoEdit.classList.add("fa", "fa-edit");
        btnedit.appendChild(iconoEdit);

        btnedit.addEventListener("click", () => editar(nombre));
        li.appendChild(btnedit);

        lista.appendChild(li);
    });
}

function deleteIndividual(nombre){
    console.log(nombre);
    nombres = nombres.filter(n => n !== nombre);
    localStorage.setItem("nombres", JSON.stringify(nombres));
    actualizarLista();
}

function limpiarStorage() {
    localStorage.clear();
    nombres = [];
    actualizarLista();
}

function editar(nombre) {
    editando = true;
    nombre_previo = nombre;
    nombreInput.value = nombre;
}


(()=>{
    actualizarLista();
})()

