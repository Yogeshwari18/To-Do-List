//const toDoItems = document.getElementsByClassName("to-do-items")[0];
//const input = document.getElementById("input");
//const trashIcon = document.getElementById("trash");

/*input.addEventListener("keydown",function(event){
    if(event.key === "Enter")
    addItem();
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click",function(){
        checkIcon.style.color ="limegreen";
    })

divChild.appendChild(checkIcon);

trashIcon.className = "fas fa-trash";
trashIcon.style.color = "drakgray";
trashIcon.addEventListener("click",function(){
    divParent.remove();

})

divChild.appendChild(trashIcon);

divParent.appendChild(divChild);

toDoItems.appendChild(divParent);

input.value = '';

}*/

document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      addItem(input.value);
    }
      
  });
  
  document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
  });
  
  addItem = (input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");
  
    item.className = "item";
    text.textContent = input;
  
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", () => {
      checkIcon.style.color = "limegreen";
    })
    div.appendChild(checkIcon);
  
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", () => {
      item.remove();
    })
    div.appendChild(trashIcon);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
  }
  