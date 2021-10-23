/*Declaring variable for hambuger menu icon */
const faBars = document.querySelector(".fa-bars")
/*Declaring variable for hambuger menu X */
const faTimes = document.querySelector(".fa-times")

/*Declaring variable for hamburger menu content*/
const hamburgerMenu= document.querySelector(".hamburger-menu")

/* Changing the hamburger-menu display to block to show it when clicked*/
faBars.addEventListener("click", 
function(){
hamburgerMenu.style.display = "block";
})

/* Changing the hamburger-menu display to none to hide it when clicked*/
faTimes.addEventListener("click", 
function(){
hamburgerMenu.style.display = "none";
})