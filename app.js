const todoItems = document.getElementById('todo-items');
const addItems = document.getElementById('add-items');
const deleteAll = document.getElementById('Delete-all');
const list = document.getElementById('list');
const database = firebase.database().ref('todos');

database.on('child_added', data => {
    const todoText = document.createTextNode(data.val().value);
    const li = document.createElement('li');
    const deleteBtn = document.createElement("button");
    const delBtnText = document.createTextNode("DELETE");
    const editBtn = document.createElement("button");
    const editBtnText = document.createTextNode("EDIT");
    deleteBtn.setAttribute("onclick", "deleteli(this)");
    deleteBtn.setAttribute("id", data.val().key);
    deleteBtn.setAttribute("class", "delete-btn");
    editBtn.setAttribute("class", "Edit-btn");
    editBtn.setAttribute("onclick", "edit(this)");
    editBtn.setAttribute("id", data.val().key);
    deleteBtn.appendChild(delBtnText);
    editBtn.appendChild(editBtnText);
    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
})

const addtask = () => {
    if (todoItems.value.trim()) {
        const key = database.push().key;
        let todo = {
            value: todoItems.value,
            key: key
        }
        database.child(key).set(todo);
        todoItems.value = "";
    }
}

const deleteli = (a) => {
    database.child(a.id).remove();
    a.parentNode.remove();
}

const deleteall = () => {
    database.remove();
    list.innerHTML = "";
}

const edit = (b) => {
    const editVal = prompt("Enter Edit value", b.parentNode.firstChild.nodeValue);
    let val = {
        value: editVal,
        key: b.id
    }
    b.parentNode.firstChild.nodeValue = editVal;
}