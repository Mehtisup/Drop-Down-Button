function myFunction() {
    document.getElementById("myList").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        var list = document.getElementsByClassName("list");
        var i;
        for (i = 0 ; i < list.length ; i++) {
            var myList = list[i];
            if (myList.classList.contains('show')) {
                myList.classList.remove('show');
            }
        }
    }
}

function aFunction() {
    document.getElementById("header").innerHTML = "Tehran";
}

function bFunction() {
    document.getElementById("header").innerHTML = "Paris";
}

function cFunction() {
    document.getElementById("header").innerHTML = "Chicago";
}

function dFunction() {
    document.getElementById("header").innerHTML = "New York";
}

function eFunction() {
    document.getElementById("header").innerHTML = "California";
}



