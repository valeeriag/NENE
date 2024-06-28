document.addEventListener("DOMContentLoaded", ()=>{

    //elementos del DOM
    const toggleButton = document.querySelector(".navbarToggle-btn");
    const movileMenu = document.querySelector (".navbarMovile-menu")
    
    
    //Menu movil oculto (vacio (none)) lo muestra en "flex"
    // Menu movil visible (flex) lo oculta a "none"
    const toggleMenu = () =>{
        movileMenu.style.display =
            movileMenu.style.display === "none" ||  movileMenu.style.display == ""
            ?"flex"
            :"none";
    };
    
    //Ocultar menu desplegable
    const hideMenuResize =() => {
        movileMenu.style.display = "none"
    
    }
    toggleButton.addEventListener("click", toggleMenu);
     window.addEventListener("resize", hideMenuResize)
        window.addEventListener("load", hideMenuResize)
    });