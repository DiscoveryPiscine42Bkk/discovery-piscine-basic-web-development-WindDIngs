$(document).ready(function() {
    getCookies();
    $("#button").click(function(e){
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
        for (var i = 0; i < cookies.length; ++i)
        {
            todos.push(cookies[i]);
            var nDiv = document.createElement("div");
            $(nDiv).attr("id", "todo");
            var nPara = document.createElement("p");
            $(nPara).text(cookies[i]);
            $(nDiv).append(nPara);
            $(nDiv).click(function(e) {
                remove_todo(this)
            });
            $("#ft_list").append(nDiv);
        }
        document.cookie = "texts=" + todos;
    }
}
function add_todo(){
    var task = window.prompt("Enter Task(s): ");
    if (task && !task.includes(";") && !todos.includes(task)) {
        todos.push(task)
        
        var nDiv = document.createElement("div");
        $(nDiv).attr("id","todo");
        var nPara = document.createElement("p");
        $(nPara).text(task);
        $(nDiv).append(nPara);
        $("#ft_list").append(nDiv);
        document.cookie = "texts=" + todos;
        $(nDiv).click(function(e) {
            remove_todo(this)
        });
        
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
