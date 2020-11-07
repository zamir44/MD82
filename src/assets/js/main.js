import './lazyload.js';
import * as basicLightbox from './basicLightbox.js'

(new LazyLoad());

window.addEventListener('DOMContentLoaded', (e) => {

    const images = document.querySelectorAll('.grid-image');

    images.forEach(image => {
        image.addEventListener('click', (e) => {
            const item = image.childNodes[5].childNodes[1];

            basicLightbox.create(item.cloneNode(true)).show()
        })
    })

    const mainImages = document.querySelectorAll('.main-img');

    mainImages.forEach(image => {
        image.addEventListener('click', (e) => {
            const item = image.childNodes[3].childNodes[3];

            basicLightbox.create(item.cloneNode(true)).show()
        })
    })


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