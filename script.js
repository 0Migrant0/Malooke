// script.js

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("image-overlay");
  const overlayImg = document.getElementById("overlay-img");
  const closeBtn = document.querySelector(".close-btn");

  // Function to open the overlay
  function openOverlay(imgSrc) {
    overlayImg.src = imgSrc;
    overlay.style.display = "flex";
  }

  // Function to close the overlay
  function closeOverlay() {
    overlay.style.display = "none";
  }

  // Add click event listeners to all images in sliders
  document.querySelectorAll(".slider img").forEach((img) => {
    img.addEventListener("click", () => openOverlay(img.src));
  });

  // Add click event listener to the close button
  closeBtn.addEventListener("click", closeOverlay);

  // Add click event listener to overlay to close when clicking outside the image
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuToggle.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const isVisible = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isVisible ? "none" : "block";
  });
});
