document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when a nav link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Initialize Swiper Slider for Featured Books
  const featuredSwiper = new Swiper('.featured-slider', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
    },
  });

  // Add to Cart Button Functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Placeholder logic for adding a book to the cart
      alert('Book added to cart!');
      // In a real application, you could update a cart array or localStorage here.
    });
  });

  // Newsletter Form Submission Handling
  const newsletterForm = document.querySelector('.newsletter-signup form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing!');
      newsletterForm.reset();
    });
  }

  // Search Form Submission Handling
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchForm.querySelector('input[type="text"]').value;
    if (query.trim() !== '') {
      alert('Searching for: ' + query);
      // Add logic to filter or search books here
    }
  });
});
