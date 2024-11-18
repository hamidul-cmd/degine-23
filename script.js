let home = document.querySelector(".home")
let listing = document.querySelector(".listing")
let blog = document.querySelector(".blog")
let page = document.querySelector(".page")


let home__drop = document.querySelector(".home__drop__down")
let listing__drop = document.querySelector(".listing__drop__down")
let blog__drop = document.querySelector(".blog__drop__down")
let page__drop = document.querySelector(".page__drop__down")





home.onmouseenter = () => {
    home__drop.style.transform= "none";
}
home.onmouseleave = () => {
    home__drop.style.transform = "translateY(-100%)";
}
home__drop.onmouseenter = () => {
    home__drop.style.transform= "none";
}
home__drop.onmouseleave = () => {
    home__drop.style.transform = "translateY(-100%)";
}
//listing manu
listing.onmouseenter = () => {
    listing__drop.style.transform= "none";
}
listing.onmouseleave = () => {
    listing__drop.style.transform = "translateY(-100%)";
}
listing__drop.onmouseenter = () => {
    listing__drop.style.transform= "none";
}
listing__drop.onmouseleave = () => {
    listing__drop.style.transform = "translateY(-100%)";
}
//blog manu
blog.onmouseenter = () => {
    blog__drop.style.transform= "none";
}
blog.onmouseleave = () => {
    blog__drop.style.transform = "translateY(-100%)";
}
blog__drop.onmouseenter = () => {
    blog__drop.style.transform= "none";
}
blog__drop.onmouseleave = () => {
    blog__drop.style.transform = "translateY(-100%)";
}
//pages manu
page.onmouseenter = () => {
    page__drop.style.transform= "none";
}
page.onmouseleave = () => {
    page__drop.style.transform = "translateY(-100%)";
}
page__drop.onmouseenter = () => {
    page__drop.style.transform= "none";
}
page__drop.onmouseleave = () => {
    page__drop.style.transform = "translateY(-100%)";
}


//swiper js code
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }