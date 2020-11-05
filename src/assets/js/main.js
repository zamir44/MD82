import './lazyload.js';

(new LazyLoad());

window.addEventListener('DOMContentLoaded', (e) => {

    const images = document.querySelectorAll('.grid-image');
    // const largeImages = document.querySelectorAll('.grid-half');

    document.querySelector('.grid-image').onclick = () => {
        images.forEach(image => {
            image.addEventListener("click", (e) => {

                const url = image.childNodes[5].childNodes[1].src;

                basicLightbox.create(`
         <img width="1400" height="900" src="${url}">
     `).show()
            })
        })
    }

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