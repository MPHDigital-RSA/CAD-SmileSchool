const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        faqItems.forEach((i) => {
            i.classList.remove("active");
        });

        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            item.classList.add("active");
        }

    })
})