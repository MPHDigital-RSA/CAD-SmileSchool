const menuButton = document.getElementById("menu-toggle-button");
const menuClose = document.getElementById("menu-close-button");
const header = document.getElementById("header");

const faqs = document.querySelectorAll(".faq-item")

// event listeners
menuButton.addEventListener("click", openMobileMenu);
menuClose.addEventListener("click", closeMobileMenu);
faqs.forEach((faq) => {
    // add a click event listener to every faq item
    faq.addEventListener("click", () => {
        closeAllFaqTabs();
        faq.classList.add("active");
    })
})

// event handlers FNs
function openMobileMenu() {
    header.classList.add("mobile-menu-active");
}

function closeMobileMenu() {
    header.classList.remove("mobile-menu-active");
}

function closeAllFaqTabs() {
    faqs.forEach((faq) => {
        faq.classList.remove("active");
    })
}

