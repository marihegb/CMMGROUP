const hamburger = document.querySelector ('.hamburger');
const documento = document.querySelector ('.menu-navegacion');



hamburger.addEventListener("click",(e) => {
     console.log(e);
    e.preventDefault();
    documento.style.transform = "translate(10%)";
    e.stopPropagation(); 
});

document.addEventListener("click",(e) => {
    console.log(e)
    if (e.target.className != "menu-navegacion" && e.target.className != "link"){
    documento.style.transform = "translate(110%)";
    };
    e.stopPropagation();
});


// window.addEventListener("click", (e) => {
//     if(menu.classList.contains('spread') && e.target !=menu  &&  e.target !=hamburger ){

//     }

// }
