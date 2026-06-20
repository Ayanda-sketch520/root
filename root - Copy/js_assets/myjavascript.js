//
// THUSI'S BAKERY JAVASCRIPT
//

// =============================
// LIGHTBOX SETTINGS
// =============================
if (typeof lightbox !== "undefined") {
    lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        fadeDuration: 300,
        imageFadeDuration: 300,
        positionFromTop: 100,
        disableScrolling: true
    });
}

// =============================
// MAIN SCRIPT
// =============================
document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Thusi's Bakery!");

    // =============================
    // ACTIVE NAVIGATION LINK
    // =============================
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".navigation a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // =============================
    // PRODUCT CARDS
    // =============================
    const products = document.querySelectorAll(".product-card");

    console.log("Number of products:", products.length);

    products.forEach(product => {
        product.addEventListener("click", function () {
            const productName = this.querySelector("h3");

            if (productName) {
                alert("You selected: " + productName.textContent);
            }
        });
    });

    // =============================
    // CONTACT PAGE INTERACTIONS
    // =============================
    const phone = document.querySelector(".phone");
    const email = document.querySelector(".email");

    if (phone) {
        phone.addEventListener("click", function () {
            alert("Call us on: 074 785 0691");
        });
    }

    if (email) {
        email.addEventListener("click", function () {
            alert("Send enquiries to: info@thusibakery.co.za");
        });
    }

    // =============================
    // ENQUIRY FORM VALIDATION
    // =============================
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {

            const fullname = document.querySelector('input[name="fullname"]');
            const emailField = document.querySelector('input[name="email"]');
            const phoneField = document.querySelector('input[name="phone"]');
            const quantityField = document.querySelector('input[name="quantity"]');

            const isEmpty =
                (fullname && fullname.value.trim() === "") ||
                (emailField && emailField.value.trim() === "") ||
                (phoneField && phoneField.value.trim() === "");

            if (isEmpty) {
                alert("Please complete all required fields.");
                event.preventDefault();
                return;
            }

            if (quantityField && Number(quantityField.value) <= 0) {
                alert("Please enter a valid quantity.");
                event.preventDefault();
                return;
            }

            alert("Thank you! Your enquiry has been submitted successfully.");
        });
    }

    // =============================
    // FOOTER YEAR UPDATE
    // =============================
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            "Thusi's Bakery © " + new Date().getFullYear();
    }

});
