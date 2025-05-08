document.addEventListener("DOMContentLoaded", function () {
    const menu_icon = document.getElementById("menu");
    const side_bar = document.getElementById("side-bar");
    const main_content = document.getElementById("main-content");

    menu_icon.addEventListener("click", function () {
      side_bar.classList.toggle("small-side-bar");
      main_content.classList.toggle("expand-main");
    });
  });


  function vdoClick(){
    let vdo  = document.getElementById("vdo_content");
    let main = document.getElementById("main-content");
    const side_bar = document.getElementById("side-bar");


    vdo.classList.remove("hidden");
    main.classList.add("hidden");
    side_bar.classList.toggle("small-side-bar");

  
  }

  function vdoClick12(){
    let vdo1  = document.getElementById("vdo_content1");
    let main = document.getElementById("main-content");
    const side_bar = document.getElementById("side-bar");


    vdo1.classList.remove("hidden");
    main.classList.add("hidden");
    side_bar.classList.toggle("small-side-bar");

  
  }