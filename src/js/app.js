document.addEventListener("DOMContentLoaded", function () {
  startApp();
});

function startApp() {
  navFixed();
  createGallery();
  scrollNav();
}

// Para hacer scroll suavemente
function scrollNav() {
  const links = document.querySelectorAll(".main-nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionScroll = e.target.attributes.href.value;
      const section = document.querySelector(sectionScroll);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function navFixed() {
  const header = document.querySelector(".header");
  const aboutFestival = document.querySelector(".about-festival");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    if (aboutFestival.getBoundingClientRect().bottom < 0) {
      header.classList.add("fixed");
      body.classList.add("body-scroll");
    } else {
      header.classList.remove("fixed");
      body.classList.remove("body-scroll");
    }
  });
}

function createGallery() {
  const gallery = document.querySelector(".images-gallery");
  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("picture");
    image.innerHTML = `
          <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
          <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
          <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Vocalist image" />
     `;
    image.onclick = () => {
      showImage(i);
    };
    gallery.appendChild(image);
  }
}

function showImage(id) {
  const image = document.createElement("picture");
  image.innerHTML = `
          <source srcset="build/img/grande/${id}.avif" type="image/avif" />
          <source srcset="build/img/grande/${id}.webp" type="image/webp" />
          <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Vocalist image" />
     `;

  // Creating the overlay with image
  const overlay = document.createElement("div");
  overlay.appendChild(image);
  overlay.classList.add("overlay");
  overlay.onclick = () => {
    const body = document.querySelector("body");
    body.classList.remove("fix-body");
    overlay.remove();
  };

  // Button to close the modal
  const closeModal = document.createElement("p");
  closeModal.textContent = "X";
  closeModal.classList.add("btn-close");
  closeModal.onclick = () => {
    const body = document.querySelector("body");
    body.classList.remove("fix-body");
    overlay.remove();
  };
  overlay.appendChild(closeModal);

  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fix-body");
}
