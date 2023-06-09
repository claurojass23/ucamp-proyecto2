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

let clients=[];
  let myIndex;
   function addClient(){
    
    var newClient={
      name:document.getElementById("client-name").value,
      email:document.getElementById("client-email").value
    }

    localStorage.setItem("newClient" , JSON.stringify(newClient));
    clients.push(newClient);
    displayClients();
  }
  
  localStorage.setItem("newClient" , JSON.stringify(newClient));
  
  function displayClients(){
    document.getElementById("form-list-client-body").innerHTML=""
    for (i=0;i<clients.length;i++){
      let myTr=document.createElement("tr");
      for(a in clients[i]){
        let mytd=document.createElement("td");
        mytd.innerHTML=clients[i][a]
        myTr.appendChild(mytd);
      }
      
      let actionTd=document.createElement("td");
      let editBtn=document.createElement("button");
      editBtn.setAttribute("class" , "btn btn-sm btn-primary");
      editBtn.setAttribute("onclick" , "editClient("+i+")");

      const iconoEdit = document.createElement("i");
      iconoEdit.classList.add("fa", "fa-edit");
      editBtn.appendChild(iconoEdit);
  
      let deletebtn=document.createElement("button");
      deletebtn.setAttribute("class" , "btn btn-sm btn-danger");
      deletebtn.setAttribute("onclick" , "deleteClient("+i+")");
      

      const iconoBasura = document.createElement("i");
      iconoBasura.classList.add("fa", "fa-trash");
      deletebtn.appendChild(iconoBasura)


      actionTd.appendChild(editBtn)
      actionTd.appendChild(deletebtn)
      myTr.appendChild(actionTd);
      document.getElementById("form-list-client-body").appendChild(myTr);

      }
      document.getElementById("client-name").value="";
      document.getElementById("client-email").value=""
  }

  
  function editClient(i){
    console.log(clients[i]);
    myIndex=i;
    let updatebtn=document.createElement("button")
    updatebtn.innerHTML="Guardar cambio";
    updatebtn.setAttribute("class", "btn btn-sm btn-success");
    updatebtn.setAttribute("onclick","updClient()");
    document.getElementById("saveupdate").innerHTML=""
    document.getElementById("saveupdate").appendChild(updatebtn);
    document.getElementById("client-name").value=clients[i].name
    document.getElementById("client-email").value=clients[i].email
  }

  
  function updClient(){
    let updatedClient={
      name:document.getElementById("client-name").value,
      email:document.getElementById("client-email").value
    }
    
    clients[myIndex]=updatedClient;
    let crbtn=document.createElement("button");
    crbtn.innerHTML="Guardar";
    crbtn.setAttribute("onclick","addClient()");
    crbtn.setAttribute("class","btn btn-sm btn-success");
    document.getElementById("saveupdate").innerHTML=""
    
    document.getElementById("saveupdate").appendChild(crbtn);
    displayClients();
  }

  
  function deleteClient(i){
    clients.splice(i,1);
    displayClients();
  }


 

