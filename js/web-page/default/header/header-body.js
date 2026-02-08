// console.log("🟡 header-body.js")


/* -------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------- */

  const body_page_slides = document.querySelectorAll("#main-body-container > .push-slider:nth-of-type(1) .push-content-slide-no-anim");
  const labels_header_body = document.querySelectorAll(".lbl-nav-header-body");

  // used for default setting state
  const radios_header_body = document.querySelectorAll("input[name='name-radio-nav-header-body']");

/* ------------------------------------------------------ */
/* Variables
/* ------------------------------------------------------ */

  // -

/* ------------------------------------------------------------------------ */
/* Create "PushSlides" with ClickListeners & Slides
/* ------------------------------------------------------------------------ */

  async_create_pushSlides_with_radios( radios_header_body, labels_header_body, body_page_slides );
