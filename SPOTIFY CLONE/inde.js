let element = document.getElementById("super");

element.addEventListener("click", ()=>{

    if(element.style.backgroundColor != "red"){
        element.style.backgroundColor = "red";
        element.style.transform = "scale(1.2)";
        element.style.transition = "all 0.2s ease-in 0s";
    }

    else{
        element.style.transform = "scale(1)";
        element.style.backgroundColor = "black";
    }

    
})