var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        }
    }
});

var swiper = new Swiper(".companySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ---------------

const serviceCard = document.querySelectorAll(".service-card");
serviceCard.forEach(card => {
    card.addEventListener("mouseenter", () => {
        serviceCard.forEach(remove => {
            remove.classList.remove("active");
        })
        card.classList.add("active");
    })
})

// -------------
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tablinks").click();
});

function openCity(evt, cityName) {
    document.querySelectorAll(".tabcontent").forEach(tab => {
        tab.style.display = "none";
    });

    document.querySelectorAll(".tablinks").forEach(button => {
        button.classList.remove("active");
    });

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

