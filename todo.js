var inp = document.getElementById('inp');
var btn = document.getElementById('btn');
var div = document.getElementById('l');
var del = document.getElementById('dell');
var arr = [];

btn.addEventListener('click', () => {
    if (inp.value.trim() !== "") {
        arr.push(inp.value);
        addtodo(inp.value);
        inp.value = '';
        localStorage.setItem('todos', JSON.stringify(arr));
    }
});

function addtodo(data) {
    var row = document.createElement('tr');
    var list = document.createElement('td');
    var list2 = document.createElement('td');
    var deleteBtn = document.createElement('button');

    
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'del-row-btn'; 
    
    list.innerText = data;
    list.style.fontSize = "18px";
    
    list2.appendChild(deleteBtn);
    row.appendChild(list);
    row.appendChild(list2);
    div.appendChild(row);

    
    list.addEventListener('click', () => {
        list.style.textDecoration = "line-through";
        list.style.opacity = "0.5";
    });

   
    deleteBtn.addEventListener('click', () => {
        row.remove();
        Remove(data);
    });

    
    del.addEventListener('click', () => {
        div.innerHTML = ""; 
        arr = [];
        localStorage.setItem('todos', JSON.stringify(arr));
    });
}

window.onload = () => {
    arr = JSON.parse(localStorage.getItem('todos')) || [];
    arr.forEach(x => addtodo(x));
};

function Remove(data) {
    var index = arr.indexOf(data);
    if (index > -1) {
        arr.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(arr));
    }
}