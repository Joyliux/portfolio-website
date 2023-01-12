/*  Access the hamburger and nav-menu classes.  */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
/*  Add a click event to the hamburger class to activate the menu. 
If the menu is already displayed, it will simply hide it from view.  */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  /*  Also add a click event to each of the page links. 
  Now when the user clicks on a link, the menu goes into hiding  */
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

  