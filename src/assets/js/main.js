
import { Luminous } from 'luminous-lightbox';
import LazyLoad from "vanilla-lazyload";

// import * as basicLightbox from 'basiclightbox';


(new LazyLoad());

let allImages = document.querySelectorAll('.lazy');

allImages.forEach(image => {
  new Luminous(image,  {sourceAttribute: "src"});
})




window.addEventListener('DOMContentLoaded', (e) => {

  // const images = document.querySelectorAll('.box-img');

  // images.forEach(image => {
  //   image.addEventListener('click', (e) => {
  //     // const item = image.childNodes[2];
  //     const item = image.querySelector('picture img');

  //     new Luminous(item, {sourceAttribute: "src"});

  //     // basicLightbox.create(item.cloneNode(true)).show()
  //   })
  // })




  // sticky here

  //*** STICKY NAVIGATION ***//
  const header = document.getElementById("menu-wrapper");

  window.addEventListener(
    "scroll",
    (e) => {
      window.scrollY >= 68
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
    },
    { passive: true }
  );

});


