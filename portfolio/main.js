const mobileMenu = () =>
  document.querySelector("ul").classList.toggle("mobile-menu");

/**Create element with bigger img in it and set overlay div to visible */
function view(img) {
  let imgsrc = img.src;

  let imgElem = document.createElement("div");
  imgElem.classList.add("img-container");
  imgElem.innerHTML = '<IMG SRC="' + img.src + '"onClick="close();"/>';
  document.getElementsByClassName("overlay")[0].style.cssText = "display:flex;";

  const container = document
    .getElementsByClassName("overlay")[0]
    .appendChild(imgElem);
  imgElem.addEventListener("click", (event) => {
    close();
  });
}

/**Create function for removing created element and hiding overlay div (closing the picture viewer) */
function close() {
  let element = document.getElementsByClassName("img-container")[0].remove();
  document.getElementsByClassName("overlay")[0].style.cssText = "display:none;";
}

document.querySelectorAll(".grid-item").forEach((item) => {
  item.addEventListener("click", function () {
    view(this);
  });
});

const scrollToTopBtn = document.getElementById("scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
