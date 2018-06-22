// implement this!!!
// http://joshbroton.com/hooking-up-to-the-window-onscroll-event-without-killing-your-performance/
// https://alligator.io/js/speed-up-scroll-events/
// https://stackoverflow.com/questions/7392058/more-efficient-way-to-handle-window-scroll-functions-in-jquery

var didScroll = false;

function scrollFunctions() {
    didScroll = true;
}

setInterval(function() {
    if(didScroll) {
        didScroll = false;
        navbarFunctions();
        contentPaneH2functions();
    }
}, 5);


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

//-----Line up contentPane with h2-------//

function contentPaneH2functions() {
  setTopOfContentPane(three, id_projects);
  setTopOfContentPane(four, id_about);
  setTopOfContentPane();
}


function getTopOfContentPaneTitle(h2_element) {
  var h2_element_rect = h2_element.getBoundingClientRect();
  return h2_element_rect.top;
}

function setTopOfContentPane(contentPane, h2_target) {
  var clientHeight = h2_target.clientHeight;
  var h2_target_top = getTopOfContentPaneTitle(h2_target);
  var bottomValue = (h2_target_top + clientHeight - 12);

  contentPane.style.top = bottomValue + "px";

  console.log("h2_target rect.top: " + h2_target.getBoundingClientRect().top);
  console.log("h2tar clientHeight: " + clientHeight);
  console.log("bottomValue       : " + bottomValue);
}
