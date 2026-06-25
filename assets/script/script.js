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



// Navbar code 
// Show Menu 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu 
        nav.classList.toggle('show-menu');

        //Add show-icon to show and hide the menu icon 
        toggle.classList.toggle('show-icon');
    })
}

showMenu('nav-toggle', 'nav-menu')

// Shoe Dropdown Menu 
const dropdownItem = document.querySelectorAll('.dropdown__item')

// 1> Select each dropdown item 
dropdownItem.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    // 2. Select each button click 
    dropdownButton.addEventListener('click', () => {
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')

        // 5. Call the toggleItem function 
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items 
        if (showDropdown && showDropdown != item) {
            toggleItem(showDropdown)
        }
    })
})


// create a function to display the dropdown 
const toggleItem = (item) => {
    //3.1 Select each dropdown content 
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove 
    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown');
    } else {
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class 
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

// ============ DELETE DROPDOWN STYLES =============
const mediaQuery = matchMedia('(min-width:1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown style in mobile mode when browser resizes 
const removeStyle = () => {
    //Validate if the media query reaches 1118px
    if (mediaQuery.matches) {
        //Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style');
        })

        //Remove the show-dropdown class from dropdown item
        dropdownItem.forEach((e) => {
            e.classList.remove('show-dropdown');
        })
    }
}

addEventListener('resize', removeStyle)