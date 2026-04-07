console.log("🟨 img-fullsize-slider.js")


/* ---------------------------------------------------------------------- */
/* Dom Elements
/* ---------------------------------------------------------------------- */

  // update - big img
  var imgBigFullsizeSlider = document.getElementById("js-big-img-fullsize-slider");

  // click items - mini imgs
  var mini_img_clickItems = document.querySelectorAll("#js-mini-img-list-of-img-fullsize-slider > img");
  console.log("↗️ mini_img_clickItems(lenght) = " + mini_img_clickItems.length )

  // data
  var img_big_list = [

    "media/imgs/content/img-gallery/large/1.jpg",
    "media/imgs/content/img-gallery/large/2.jpg",
    "media/imgs/content/img-gallery/large/3.jpg",
    "media/imgs/content/img-gallery/large/4.jpg",
    "media/imgs/content/img-gallery/large/5.jpg",
    "media/imgs/content/img-gallery/large/6.jpg",

  ]

/* ---------------------------------------------------------------------- */
/* Add Event
/* > Click
/* ---------------------------------------------------------------------- */

  /* --------------------------------------------------- */
  /* Step 1:
  /* > Add all ClickListener to "mini imgs"
  /* --------------------------------------------------- */

  for( let i=0; i < img_big_list.length; i++ ) {


    mini_img_clickItems[i].addEventListener("click", async () => {

      // window.alert("🖼️ Change Img = " + i )

      // Update Img Src
      await async_update_src_from_element( imgBigFullsizeSlider, img_big_list[i] )


    });


  }

  /* --------------------------------------------------- */
  /* Step 1:
  /* > Click on Img to Fullsize
  /* --------------------------------------------------- */
