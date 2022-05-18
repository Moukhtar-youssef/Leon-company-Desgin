var div = "hidden"
var ul = document.getElementById("ul");
var menu = document.querySelector('.icons');
var btn = document.querySelector('.link')
function open_menu() {
    if (div == "hidden") {
        menu.classList.add("closed");
        ul.style.display = "block";
        opened = true;
        btn.setAttribute("onClick" , "close_menu()")
        div = 'visible'
    }
    else{
    menu.classList.remove("closed");
    ul.style.display = "none";
    div = "hidden"
    }
}