const hamburgerMenu = document.querySelector(".mobile-hamburger");

const mobileMenuModal = document.querySelector(".mobile-menu-modal");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileMenuClose = document.querySelector(".mobile-menu-close");

hamburgerMenu.addEventListener("click", () => {
    console.log("Clicked");
    mobileMenuModal.showModal();
    }
);

mobileMenuClose.addEventListener("click", () => {
    mobileMenuModal.close();
    }
);