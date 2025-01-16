document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menuDropDown = document.querySelector(".menu-drob");
  
  toggle.addEventListener("click", () => {
    menuDropDown.classList.toggle("show"); // Simpler toggle for visibility
  });
    // check loction page you at right now
    const currentPage = window.location.pathname.split("/").pop().replace("%20", " ").replace("%20"," ");
    const allPages = document.querySelectorAll(".bg-color"); 
    allPages.forEach((page) => {
        // take a whick in page 
        const link = page.querySelector("a");
        if(link.getAttribute("href") === currentPage){
            page.classList.add("bg-red-600");
        }
    });
});