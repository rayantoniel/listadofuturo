const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault()
})

function NewTask() {
    var text = document.getElementById("task_item").value;
    var taskitem = document.createElement("li");
    taskitem.className = "item";
    var lista = document.getElementById("lista");

    const textElement = document.createTextNode(text);
    taskitem.appendChild(textElement);
    lista.appendChild(taskitem);
}