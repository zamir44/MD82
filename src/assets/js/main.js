import './lazyload.js';
import * as basicLightbox from './basicLightbox.js'

(new LazyLoad());

window.addEventListener('DOMContentLoaded', (e) => {

    const images = document.querySelectorAll('.grid-image');
    // const largeImages = document.querySelectorAll('.grid-half');

    images.forEach(image => {
        image.addEventListener('click', (e) => {
            const imagediv = image.childNodes[5].childNodes[1];

            basicLightbox.create(imagediv).show()
        })
    })

    // sticky here

    // //*** STICKY NAVIGATION ***//
    // const header = document.getElementById("menu-wrapper");

    // window.addEventListener(
    //   "scroll",
    //   (e) => {
    //     window.scrollY >= 100
    //       ? header.classList.add("sticky")
    //       : header.classList.remove("sticky");
    //   },
    //   { passive: true }
    // );

});