var todoItems = document.getElementById('todo-items');
var addItems = document.getElementById('add-items');
var deleteAll = document.getElementById('Delete-all');
var list = document.getElementById('list');

function addtask() {
    if (todoItems.value.trim()) {
        var todoText = document.createTextNode(todoItems.value);
        var li = document.createElement('li');
        var deleteBtn = document.createElement("button");
        var delBtnText = document.createTextNode("DELETE");
        var editBtn = document.createElement("button");
        var editBtnText = document.createTextNode("EDIT");
        deleteBtn.setAttribute("onclick", "deleteli(this)");
        deleteBtn.setAttribute("class", "delete-btn");
        editBtn.setAttribute("class", "Edit-btn");
        editBtn.setAttribute("onclick", "edit(this)");
        deleteBtn.appendChild(delBtnText);
        editBtn.appendChild(editBtnText);
        li.appendChild(todoText);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        list.appendChild(li);
        todoItems.value = "";
    }

}

function deleteli(a) {
    a.parentNode.remove();
}

function deleteall() {
    list.innerHTML = "";
}

function edit(b) {
    var editVal = prompt("Enter Edit value", b.parentNode.firstChild.nodeValue);
    b.parentNode.firstChild.nodeValue = editVal;
}