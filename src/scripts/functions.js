function navbarFunctions() {
  showNavbar();
  hideNavbarOnContactPage();
}

function showNavbar() {
  if (!isScrolledIntoView_partial(id_greeting_desc)) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

function hideNavbarOnContactPage() {
  var navbar = document.getElementById("navbar");
  if (isScrolledIntoView_partial(id_contact)) {
    navbar.style.zIndex = "0";
  } else {
    navbar.style.zIndex = "1";
  }
}

/* determine if element is partially visible */
function isScrolledIntoView_partial(div_id) {
    var rect = div_id.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

/* determine if element is completely visible */
function isScrolledIntoView_partial_complete(div_id) {
    var rect = div_id.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}



// ---------------------------------------- //
