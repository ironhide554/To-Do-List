const inputBox = document.getElementById("input-box")
const taskBox = document.getElementById("tasks-box")

function addTask(){
    if(inputBox.value ===''){
        alert("Please write something!!")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        taskBox.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ''
    save()
}

taskBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save()
   }
   else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    save()
   }
}, false);


function save(){
    localStorage.setItem("data", taskBox.innerHTML)
}

function show(){
    taskBox.innerHTML = localStorage.getItem("data");

}
show()