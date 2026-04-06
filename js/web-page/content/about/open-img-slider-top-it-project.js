console.log("🟨 open-img-slider-top-it-project.js")


/* ---------------------------------------------------------------------- */
/* Register Dom Elements
/* ---------------------------------------------------------------------- */


// img click
var imgClick = document.getElementById("js-img-click");

// click close button
var clickCloseButton = document.getElementById("close-img-gallery-top-it-project");



/* ---------------------------------------------------------------------- */
/* Add Click Events to Elements
/* ---------------------------------------------------------------------- */

// img click
imgClick.addEventListener("click", async () => {

  window.alert("💪 img Clicked")

})

// click close button
clickCloseButton.addEventListener("click", async () => {

  window.alert("❌ close clicked")

})



// linkDetails_itProject_1.addEventListener("click", async () => {

//   doDetailFullsizeView("Details 1: Online Ordering Service");

//   /* Update CSS Style */
//   str_cssStyle_update = "display:grid;"

//   await async_update_cssStyle( detail_fullsize_container, str_cssStyle_update )



// })

// // close full size view
// btn_close_fullsize.addEventListener("click", async () => {

//   /* Update CSS Style */
//   str_cssStyle_update = "display:none;"

//   await async_update_cssStyle( detail_fullsize_container, str_cssStyle_update )


// })


/* ---------------------------------------------------------------------- */
/* Function:
/* > Do Defail Fullsize View
/* ---------------------------------------------------------------------- */

  // function doDetailFullsizeView( strInfo ) {

  //   window.alert("🍎:" + strInfo);

  // }

/* ---------------------------------------------------------------------- */
/* Function:
/* > Update Css Style
/* ---------------------------------------------------------------------- */

// async function async_update_cssStyle( domElement, cssStyle ) {

//   console.log("🟡 async_update_cssStyle: ")

//   /* --------------------------------------------------------------- */
//   /* Step 1:
//   /* > Get domElement
//   /* --------------------------------------------------------------- */

//   // exist, is not null ?
//   if( domElement === null ) {

//     window.alert("❌: Failed | DomElement dont exist, " + domElement );

//   } else {

//     // Update CSS Style
//     domElement.style.cssText = cssStyle;

//     window.alert("🟩: Successful | CSS Style Update to DomElement " );

//   }



//   /* --------------------------------------------------------------- */
//   /* Step 2:
//   /* > Update CSS Style domElement
//   /* --------------------------------------------------------------- */

//   return new Promise(resolve => {
//     resolve( );
//   })

// }

/* ---------------------------------------------------------------------- */
/* Function:
/* > Do Push Slide
/* ---------------------------------------------------------------------- */
