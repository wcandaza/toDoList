let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addItem);


function addItem() {
    let numberOfChild = parentList.childElementCount;
    if (numberOfChild == 4){
        addBtn.setAttribute("disabled", "");
        alert("You reached the limit");
    }
    function remItem(){
        itemDiv.remove();
        if (count < 5){
            addBtn.setAttribute("disabled", "");
        }
    }
    //get input value
    let itemName = document.querySelector("#input-item").value;
    //get parent node
    let itemList = document.querySelector("#parentList");
    //create div
    let itemDiv = document.createElement("div");

    //create item name
    let childInput = document.createElement("input");
    childInput.type = "text";
    childInput.classList = "list";
    childInput.value = itemName;
    childInput.setAttribute("disabled", "");
    
    //create edit 
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

    //create delete button
    let delBtn = document.createElement("button");
    delBtn.addEventListener("click", delChildInput);
    delBtn.textContent = "Delete";
    function delChildInput(){
        itemDiv.remove();
        if (numberOfChild == 4)
        addBtn.removeAttribute("disabled", "");
    }
    
    
    //append 
    itemList.appendChild(itemDiv);
    itemDiv.appendChild(childInput);
    itemDiv.appendChild(editBtn);
    itemDiv.appendChild(delBtn);

    function editValue() {
        childInput.removeAttribute("disabled", "");

        //disable edit button to avoid multiple save buttons
        editBtn.setAttribute("disabled", "");

        //create save btn 
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);

        //append save btn
        itemDiv.appendChild(saveBtn);

        

        function saveValue() {
            let newValue = document.querySelector(".list").value;
            newValue.value = newValue;
            
            saveBtn.remove();
            editBtn.removeAttribute("disabled", "");

        }

        
    
    
}
}