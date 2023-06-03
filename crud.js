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


let personas =[];
  let miIndex;
   function addClient(){
   
    let newPersona ={
      usuario:document.getElementById("client-name").value,
      correo:document.getElementById("client-email").value
    }
    personas.push(newPersona)
    displayClients()
  }


  function displayUsuario(){
    document.getElementById("form-list-client-body").innerHTML=""
    for (i=0;i<personas.length;i++){
      let miTr=document.createElement("tr")
      for(a in personas[i]){
        let mitd=document.createElement("td")
        mytd.innerHTML=clients[i][a]
        myTr.appendChild(mitd)
      }
      let actionTd=document.createElement("td")
      let editBtn=document.createElement("button")
      editBtn.innerHTML="Editar"
      editBtn.setAttribute("class" , "btn btn-sm btn-primary")
      editBtn.setAttribute("onclick" , "editarClient("+i+")")


      let deletebtn=document.createElement("button")
      deletebtn.innerHTML="Eliminar"
      deletebtn.setAttribute("class" , "btn btn-sm btn-danger")
      deletebtn.setAttribute("onclick" , "eliminarClient("+i+")")


      actionTd.appendChild(editBtn)
      actionTd.appendChild(deletebtn)
      myTr.appendChild(actionTd)
      document.getElementById("form-list-client-body").appendChild(myTr)


      }
      document.getElementById("client-name").value="";
      document.getElementById("client-email").value=""
  }


 

