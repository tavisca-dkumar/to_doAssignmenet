function toDoTable() {
      console.log("working");
      document.getElementById("main").innerHTML='<input type="text" class="search" id ="search"><input type="button" class="add" id="add" value ="add" onclick="addToDo()"><table id="toDoTable"><tr><th>DATE</th><th>TO_DO</th><th>ACTIONS</th></tr></table>';  
    }
    function createButton(){
      let editButton=document.createElement("input");
      editButton.setAttribute("type","button");
      editButton.setAttribute("id","editButton");
      editButton.setAttribute("class","editButton");
      editButton.setAttribute("value","EDIT");
      editButton.setAttribute("onclick","editTodo(this)");
      return editButton;
    }
    function addToDo(){
      console.log("adddcd");
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
      var editButton = createButton();
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
    function login()
    {
      document.getElementById("main").innerHTML='<div class="login" style ="background-color: #dfe3ee"><form><label><b>Username</b></label><input type="text" class="uname" ><br><label ><b>Password</b></label><input type="password" class="name"><br><button type="submit" class="loginButton">Login</button></form></div>';
    }
    function editTodo(o){
      var button=document.createElement("input");
      button.setAttribute("type","button");
      button.setAttribute("id","update");
      button.setAttribute("class","editButton");
      button.setAttribute("value","SAVE");
      button.setAttribute("onclick","update(this)");
      var td=o.parentNode;
      console.log(td);
      console.log(button);
      console.log(td.firstChild);
      td.replaceChild(button,td.firstChild);
      var tr=td.parentNode;
      var text =document.createElement("input");
      text.setAttribute("type","text");
      text.setAttribute("id","updateText");
      text.setAttribute("class","updatetextbox")
      tr.replaceChild(text,tr.firstChild.nextSibling);
    }
    function update(o){
      var text = document.getElementById("updateText").value;
      let td=document.createElement("td");
      let textData=document.createTextNode(text);
      td.appendChild(textData);
      var tr=o.parentNode.parentNode;
      tr.replaceChild(td,tr.firstChild.nextSibling);
      var editButton=createButton();
      tr.lastChild.replaceChild(editButton,tr.lastChild.firstChild);
    }