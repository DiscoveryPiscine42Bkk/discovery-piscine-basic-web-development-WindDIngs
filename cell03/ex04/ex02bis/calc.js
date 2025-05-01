$(document).ready(function() {
    $("#button").click(function(){
        calc();
    });
});

setInterval(()=>{alert("Please, use me...")},30000)

function operation(operator,n1,n2){
    n1 = Number(n1)
    n2 = Number(n2)
    if (operator == "+") {
        return n1 + n2
    } else if (operator == "-"){
        return n1 - n2
    } else if (operator == "*") {
        return n1*n2
    } else if (operator == "/") {
        if (n2==0) {
            return "It's over 9000"
        } else{
            return n1/n2
        }
    } else if (operator == "%") {
        if (n2==0) {
            return "It's over 9000"
        } else{
            return n1%n2
        }
}
}

function calc() {
    // var val1 = document.getElementById("inp1").value
    // var val2 = document.getElementById("inp2").value
    var val1 = $("#inp1").val()
    var val2 = $("#inp2").val()

    if (!isNaN(val1)&&!isNaN(val2) && val1>=0 && val2>=0){
        // alert(operation(document.getElementById("Op").value,val1,val2))
        // console.log(operation(document.getElementById("Op").value,val1,val2))

        alert(operation(($("#Op").val()),val1,val2))
        console.log(operation(($("#Op").val()),val1,val2))
    } else {
        alert("Error :(")
        console.log("Error :(")
    }
}