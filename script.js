const input=document.getElementById("input-box")
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(input.value ===''){
        alert("write something to add Task");
        return false
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);

    }
    input.value='';
    saveData();
    



}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("task");

    }

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showData();