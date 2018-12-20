//popup variables 
let writeUsBtn = document.querySelector(".info-btn");
let writeUsPopUp = document.querySelector(".write-us");
let writeUsBtnClose = document.querySelector(".btn__close");

//map variables
let mapOpen = document.querySelector(".info__map");
let mapClose = document.querySelector(".map-btn");
let map = document.querySelector(".map");

////////////////////////////////////////////////////////////////////

//popup functions

//open
writeUsBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    writeUsPopUp.classList.remove("visually-hidden");
});

//close
writeUsBtnClose.addEventListener("click", function(evt){
    evt.preventDefault();
    writeUsPopUp.classList.add("visually-hidden");
});

////////////////////////////////////////////////////////////////////

//map functions

//open

mapOpen.addEventListener("click", function(evt){
    evt.preventDefault();
    map.classList.remove("visually-hidden");
});

//close

mapClose.addEventListener("click", function(evt){
    evt.preventDefault();
    map.classList.add("visually-hidden");
})