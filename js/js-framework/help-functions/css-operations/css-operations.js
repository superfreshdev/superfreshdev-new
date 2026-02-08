// console.log("🟨 css-operations.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Set Css Class to Element
/* ---------------------------------------------------------------- */

 async function async_set_cssClass_to_element( cssClass, element ) {

    // console.log("🟪 async_set_cssClass_to_element()")

    // console.log("➡️ cssClass = " + cssClass );
    // console.log("➡️ element = " +  element.getAttribute("class"));

    // update css class to element
    element.classList.add(cssClass);

   return new Promise(resolve => {
        resolve();
      })

 }


/* ---------------------------------------------------------------- */
/* Async Function
/* > Update old "css class" with new "css class" from element
/* ---------------------------------------------------------------- */

 async function async_update_cssClass_to_element( oldCssClass, newCssClass, element ) {

    // console.log("🟪 async_update_cssClass_to_element()")

    // console.log("➡️ oldCssClass = " + oldCssClass );
    // console.log("➡️ newCssClass = " + newCssClass );
    // console.log("➡️ element = " +  element.getAttribute("class"));

    // update css class to element
    element.classList.replace( oldCssClass, newCssClass );

   return new Promise(resolve => {
        resolve();
      })

 }
