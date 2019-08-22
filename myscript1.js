function toDoTable() {
      console.log("working");
      document.getElementById("main").innerHTML;  
    }
    function addToDo(){
      console.log("adddcd");
      document.getElementById("main").innerHTML;
      let element = document.getElementById("toDoTable");
      let tr=document.createElement("tr");
      let td1=document.createElement("td");
      let td2=document.createElement("td");
      let td3=document.createElement("td");
      let text=document.getElementById("search").value;
    
      var d = new Date();
      var datedata=d.getDate().toString()+"-"+d.getMonth().toString()+"-"+d.getFullYear().toString();
      let date=document.createTextNode(datedata);
      td1.appendChild(date);
      let textData=document.createTextNode(text);
      td2.appendChild(textData);
      let editButton=document.createElement("input");
      editButton.setAttribute("type","button");
      editButton.setAttribute("id","editButton");
      editButton.setAttribute("class","editButton");
      editButton.setAttribute("value","EDIT");
      editButton.setAttribute("onclick","editTodo(this)");
      let deleteButton=document.createElement("input");
      deleteButton.setAttribute("type","button");
      deleteButton.setAttribute("id","deleteButton");
      deleteButton.setAttribute("class","deleteButton");
      deleteButton.setAttribute("value","DELETE");
      deleteButton.setAttribute("onclick","deleteTodo(this)");
      td3.appendChild(editButton);
      td3.appendChild(deleteButton);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      element.appendChild(tr);
    }
    function deleteTodo(o)
    {
        if(confirm("Do you really want to delete"))
        {
            let ele=o.parentNode.parentNode;
            ele.parentNode.removeChild(ele);
        }
    }