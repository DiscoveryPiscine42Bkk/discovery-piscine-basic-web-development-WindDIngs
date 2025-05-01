$(document).ready(function() {
    $("#button").click(function(){
        add_todo();
    });
});

var todos = [];

function getCookies()
{
    const theCookie = document.cookie;
    const allCookie = theCookie.split('=')[1];
    if (allCookie){
        const cookies = allCookie.split(',');
        for (var i = 0; i < cookies.length; ++i){
            todos.push(cookies[i]);
            var nDiv = document.createElement("div");
            nDiv.id = "todo"
            var nPara = document.createElement("p");
            const node = document.createTextNode(cookies[i]);
            nPara.appendChild(node);
            nDiv.appendChild(nPara);
            
            nDiv.onclick = function(){
                confirmDelete(this);
            };
            document.cookie = "texts=" + todos;
            document.getElementById("ft_list").appendChild(nDiv);
        }
    }
}

function add_todo(){
    var task = window.prompt("Enter Task(s): ");
    if (task && !task.includes(";") && !todos.includes(task)) {
        var nDiv = document.createElement("div");
        nDiv.id="todo"
        
        var nPara = document.createElement("p");
        const node = document.createTextNode(task);
        nPara.appendChild(node)
        nDiv.appendChild(node)
        nDiv.onclick = function () {
            remove_todo(this)
        };
        todos.push(task)
        document.cookie = "texts=" + todos;
        document.getElementById("ft_list").prepend(nDiv);        
    } else{
        alert("Please enter task!");
    }
}
function remove_todo(item){
    var delcom = confirm('Are you sure you want to remove this task?');
    
    if(delcom){
        const index = todos.indexOf(item.firstChild.innerText);
        todos.splice(index, 1);
        document.cookie = "texts=" + todos;
        item.remove();
    } else{
        alert("Aborted")
    }
}
