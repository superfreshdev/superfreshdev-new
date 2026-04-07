// console.log("🟨 update-css-attributes.js")


/* ---------------------------------------------------------------- */
/* Async Function
/* > Update CSS Class
/* ---------------------------------------------------------------- */

 async function async_update_cssClass_to_element( idElement, newCssClass ) {

    // console.log("🟪 async_update_cssClass_to_element()")

    // ⚠️ dont check if class-attribute exist
    var oldCssClass = idElement.getAttribute("class")
    console.log("➡️ oldCssClasst = " +  oldCssClass);

    // update css class to element
    idElement.classList.replace( oldCssClass, newCssClass );

   return new Promise(resolve => {
        resolve();
      })

 }

/* ---------------------------------------------------------------- */
/* Async Function
/* > Update ID
/* ---------------------------------------------------------------- */
