const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  new Accordion('.accordion-container');

  new Accordion('.accordion-container-2',
  /* {
    elementClass: "ac-2",
    triggerClass: "ac-trigger-2",
    panelClass: "ac-panel-2",
    activeClass: "is-active-2",
  } */)

