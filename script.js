// =========================================================
// SAI TEJASRI PORTFOLIO
// Website Interactions
// =========================================================


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });


    // Close mobile menu after clicking a navigation link

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });

}


// =========================
// PROJECT FILTERING
// =========================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory =
            button.getAttribute("data-filter");


        // Remove active state from all buttons

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active state to clicked button

        button.classList.add("active");


        // Show / hide projects

        projectCards.forEach(function (project) {

            const projectCategory =
                project.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                projectCategory === selectedCategory
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});


// =========================
// CURRENT YEAR
// =========================

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
