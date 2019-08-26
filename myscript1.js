var todo=[];
var StaticTodo='<input type="text" class="search" list="datalist" id ="search" onkeyup="autoSuggestion(this.value)"><datalist id="datalist"></datalist><input type="button" class="add" id="add" value ="add" onclick="addToDo()"><table id="toDoTable"><tr><th>DATE</th><th>TO_DO</th><th>ACTIONS</th></tr></table>';
function addingElementToArray(o)
{
  console.log(o);
    if(todo.length==0){
        todo.push(o);
        return true;
      }
    for(let ele of todo)
    {
      if(o==ele){
        console.log(o);
        return false;
        }
    }
      todo.push(o);
      return true
}
function deletingElementToArray(element)
{
  let index=todo.indexOf(element);
  if(index!=-1)
    todo.splice(index,1);
  
}
function autoSuggestion(value)
{
  //todoAraayLength=todo.length;
  document.getElementById('datalist').innerHTML='';
 // let l=value.length;
  for(var ele of todo)
  {
      if(ele.indexOf(value)>-1)
      {
        var node = document.createElement("option"); 
        var val = document.createTextNode(ele); 
        node.appendChild(val);
        document.getElementById("datalist").appendChild(node);
      }
  }

}

function toDoTable() {
      console.log("working");
      document.getElementById("main").innerHTML=StaticTodo;  
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
      let text=document.getElementById("search").value;
      if(addingElementToArray(text)){
          let element = document.getElementById("toDoTable");
          let tr=document.createElement("tr");
          let td1=document.createElement("td");
          let td2=document.createElement("td");
          let td3=document.createElement("td");
      
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
          StaticTodo=document.getElementById("main").innerHTML;

        }
    }
    function deleteTodo(o)
    {
        if(confirm("Do you really want to delete"))
        {
          var td=o.parentNode;
          var tr=td.parentNode;
          prevText=tr.firstChild.nextSibling.firstChild.textContent;
          deletingElementToArray(prevText);
          tr.parentNode.removeChild(tr);
        }
    }
    function login()
    {
      document.getElementById("main").innerHTML='<div class="login" style ="background-color: #dfe3ee"><form><label><b>Username</b></label><input type="text" class="uname" ><br><label ><b>Password</b></label><input type="password" class="name"><br><button type="submit" class="loginButton">Login</button></form></div>';
    }
    function editTodo(o){
      var td=o.parentNode;
      var tr=td.parentNode;
      prevText=tr.firstChild.nextSibling.firstChild.textContent;
      console.log(prevText +"value");
      var button=document.createElement("input");
      button.setAttribute("type","button");
      button.setAttribute("id","update");
      button.setAttribute("class","editButton");
      button.setAttribute("value","SAVE");
      button.setAttribute("onclick","update(this,prevText)");
      td.replaceChild(button,td.firstChild);
      var text =document.createElement("input");
      text.setAttribute("type","text");
      text.setAttribute("id","updateText");
      text.setAttribute("class","updatetextbox")
      tr.replaceChild(text,tr.firstChild.nextSibling);
    }
    function update(o,prevText){
      console.log(prevText);
      var text = document.getElementById("updateText").value;
      let td=document.createElement("td");
      let textData;
      if(addingElementToArray(text))
        textData=document.createTextNode(text);
      else
        textData=document.createTextNode(prevText);
      td.appendChild(textData);
      var tr=o.parentNode.parentNode;
      tr.replaceChild(td,tr.firstChild.nextSibling);
      var editButton=createButton();
      tr.lastChild.replaceChild(editButton,tr.lastChild.firstChild);
    }
