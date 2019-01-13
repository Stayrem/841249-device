//popup variables 
let writeUsBtn = document.querySelector(".info-btn");
let writeUsPopUp = document.querySelector(".write-us");
let writeUsBtnClose = document.querySelector(".btn__close");
let loginWriteUs = writeUsPopUp.querySelector(".write-us__name");
let emailWriteUs = writeUsPopUp.querySelector(".write-us__mail");
let formSubmit = document.querySelector(".write-us-btn-submit");

//map variables
let mapOpen = document.querySelector(".info__map");
let mapClose = document.querySelector(".map-btn");
let map = document.querySelector(".map");

//services variables
let serviceBtnDelivery = document.querySelector(".services__item--delivery");
let serviceBtnAssurance = document.querySelector(".services__item--assurance");
let serviceBtnCredit = document.querySelector(".services__item--credit");
let serviceContentDelivery = document.querySelector(".services__content--delivery");
let serviceContentAssurance = document.querySelector(".services__content--assurance");
let serviceContentCredit = document.querySelector(".services__content--credit");
let allServicesBtn = document.querySelectorAll(".services__item");
let allServicesContent = document.querySelectorAll(".services__content");

//slider variables
let slidesBtn = document.querySelectorAll(".slider-nav-item");
let slides = document.querySelectorAll(".slider__item");
let firstSlide = document.querySelector(".slider__content--first");
let secondSlide = document.querySelector(".slider__content--second");
let thirdSlide = document.querySelector(".slider__content--third");
let firstNavBtn = document.querySelector(".slider-nav-item--first");
let secondNavBtn = document.querySelector(".slider-nav-item--second");
let thirdNavBtn = document.querySelector(".slider-nav-item--third");

////////////////////////////////////////////////////////////////////



//slider functions
firstNavBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    slidesBtn.forEach(function(evt){
        evt.classList.remove("slider-nav-item--active");
        slidesBtn[0].classList.add("slider-nav-item--active");
    });
    slides.forEach(function(evt){
        evt.classList.add("d-none");
        slides[0].classList.remove("d-none");
    });   
});
secondNavBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    slidesBtn.forEach(function(evt){
        evt.classList.remove("slider-nav-item--active");
        slidesBtn[1].classList.add("slider-nav-item--active");
    });
    slides.forEach(function(evt){
        evt.classList.add("d-none");
        slides[1].classList.remove("d-none");
    });
});
thirdNavBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    slidesBtn.forEach(function(evt){
        evt.classList.remove("slider-nav-item--active");
        slidesBtn[2].classList.add("slider-nav-item--active");
    });
    slides.forEach(function(evt){
        evt.classList.add("d-none");
        slides[2].classList.remove("d-none");
    });
});

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
    writeUsPopUp.classList.remove("modal-us-show");
});

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
    map.classList.remove("modal-us-show");
})

//form
writeUsPopUp.addEventListener("submit", function(evt){
    if(!loginWriteUs.value || !emailWriteUs.value){
        evt.preventDefault();
        console.log("Введите Имя и Email");
        writeUsPopUp.classList.remove("modal-us-show");
        writeUsPopUp.classList.add("modal-error");
        return 0;
    }
    evt.preventDefault();
    console.log("форма отправлена");
    console.log(`Ваш логин:${loginWriteUs.value}\nВаш email:${emailWriteUs.value}`);
});


//services functions

