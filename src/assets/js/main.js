import * as basicLightbox from 'basiclightbox';
import LazyLoad from "vanilla-lazyload";


(new LazyLoad());


window.addEventListener('DOMContentLoaded', (e) => {

  const images = document.querySelectorAll('.box-img');

  images.forEach(image => {
    image.addEventListener('click', (e) => {

      const item = image.querySelector('[data-light]');

      const picture = `
        <img src="${item.dataset.light}" alt=""/>
      `

      basicLightbox.create(picture).show();
    })

    const btnScroll = document.querySelector('#scrollTop');

    btnScroll.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    })

  })





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

// SCROLL TO TOP

