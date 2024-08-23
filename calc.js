
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal_btn");
let clear= document.querySelector(".clear_btn");


buttons.forEach(function (button){
    button.addEventListener("click",function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equal.addEventListener("click",function(e){
    if(screen.value === "")
        screen.value="";
    else
        screen.value=eval(screen.value);
});

clear.addEventListener("click",function(e){
        screen.value="";
});



/*
_The querySelector() method : returns the first element that matches a CSS selector.

Get the first <p> element:
--> document.querySelector("p");
Get the first element with class="example":
--> document.querySelector(".example");

_To return all matches (not only the first), use the querySelectorAll() instead.


*/