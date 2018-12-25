//popup variables 
let writeUsBtn = document.querySelector(".info-btn");
let writeUsPopUp = document.querySelector(".write-us");
let writeUsBtnClose = document.querySelector(".btn__close");
let loginWriteUs = writeUsPopUp.querySelector(".write-us__name")

//map variables
let mapOpen = document.querySelector(".info__map");
let mapClose = document.querySelector(".map-btn");
let map = document.querySelector(".map");

//services variables
let serviceBtnDelivery = document.querySelector(".services__btn--delivery");
let serviceBtnAssurance = document.querySelector(".services__btn--assurance");
let serviceBtnCredit = document.querySelector(".services__btn--credit");
let serviceContentDelivery = document.querySelector(".services__content--delivery");
let serviceContentAssurance = document.querySelector(".services__content--assurance");
let serviceContentCredit = document.querySelector(".services__content--credit");
let allServicesBtn = document.querySelectorAll(".services__btn");
let allServicesContent = document.querySelectorAll(".services__content");

////////////////////////////////////////////////////////////////////

//popup functions

//open
writeUsBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    writeUsPopUp.classList.remove("visually-hidden");
    writeUsPopUp.classList.add("modal-us-show");
    loginWriteUs.focus();
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
    map.classList.add("modal-us-show");
});

//close

mapClose.addEventListener("click", function(evt){
    evt.preventDefault();
    map.classList.add("visually-hidden");
})

//services functions
serviceBtnDelivery.addEventListener("click", function(evt){
    allServicesBtn.forEach(function(evt) {
        evt.classList.remove("services__btn--active");
    });
    serviceBtnDelivery.classList.add("services__btn--active");

    allServicesContent.forEach(function(evt){
        evt.classList.add("visually-hidden")
    })
    serviceContentDelivery.classList.remove("visually-hidden");
    
});

serviceBtnAssurance.addEventListener("click", function(evt){
    allServicesBtn.forEach(function(evt) {
        evt.classList.remove("services__btn--active");
    });
    serviceBtnAssurance.classList.add("services__btn--active");
    serviceContentAssurance.classList.remove("visually-hidden");

    allServicesContent.forEach(function(evt){
        evt.classList.add("visually-hidden")
    })
    serviceContentAssurance.classList.remove("visually-hidden");
});

serviceBtnCredit.addEventListener("click", function(evt){
    allServicesBtn.forEach(function(evt) {
        evt.classList.remove("services__btn--active");
    });
    serviceBtnCredit.classList.add("services__btn--active");
    serviceContentCredit.classList.remove("visually-hidden");

    allServicesContent.forEach(function(evt){
        evt.classList.add("visually-hidden")
    })
    serviceContentCredit.classList.remove("visually-hidden");
})

