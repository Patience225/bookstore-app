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
  var featuredSwiper = new Swiper('.featured-slider', {
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
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 },
    },
  });
  
  // Add to Cart Button Functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Book added to cart!');
    });
  });
  
  // Newsletter Signup Handling
  const newsletterForm = document.querySelector('.newsletter-form');
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
    }
  });
  
  // Category Filtering Functionality
  const categoryItems = document.querySelectorAll('.category-item');
  const categoryBooksContainer = document.getElementById('category-books');
  const categoryTitle = document.getElementById('category-title');
  
  // Dummy data for category books
  const categoryData = {
    "software-engineering": [
      { title: "Clean Architecture", author: "Robert C. Martin", image: "images/clean-architecture.jpg" },
      { title: "The Clean Coder", author: "Robert C. Martin", image: "images/clean-coder.jpg" },
      { title: "Working Effectively with Legacy Code", author: "Michael Feathers", image: "images/Working-Effectively-with-Legacy-Code.jpg" },
      { title: "Refactoring", author: "Martin Fowler", image: "images/refactoring.jpg" },
      { title: "Domain-Driven Design", author: "Eric Evans", image: "images/domain-driven.jpg" }
    ],
    "computer-science": [
      { title: "Introduction to Algorithms", author: "Cormen et al.", image: "images/algorithms.jpg" },
      { title: "SICP", author: "Abelson & Sussman", image: "images/sicp.jpg" },
      { title: "Computer Systems", author: "Bryant & O'Hallaron", image: "images/computer-systems.jpg" },
      { title: "The Art of Computer Programming", author: "Donald Knuth", image: "images/taocp.jpg" },
      { title: "Algorithms", author: "Robert Sedgewick", image: "images/algorithms-sedgewick.jpg" }
    ],
    "web-development": [
      { title: "Eloquent JavaScript", author: "Marijn Haverbeke", image: "images/eloquent-js.jpg" },
      { title: "You Don't Know JS", author: "Kyle Simpson", image: "images/ydkjs.jpg" },
      { title: "JavaScript: The Good Parts", author: "Douglas Crockford", image: "images/js-good-parts.jpg" },
      { title: "Learning React", author: "Alex Banks & Eve Porcello", image: "images/learning-react.jpg" },
      { title: "CSS Secrets", author: "Lea Verou", image: "images/css-secrets.jpg" }
    ],
    "data-science": [
      { title: "Data Science from Scratch", author: "Joel Grus", image: "images/data-science.jpg" },
      { title: "Python Data Science Handbook", author: "Jake VanderPlas", image: "images/python-ds.jpg" },
      { title: "Hands-On Machine Learning", author: "Aurélien Géron", image: "images/handson-ml.jpg" },
      { title: "Deep Learning", author: "Ian Goodfellow", image: "images/deep-learning.jpg" },
      { title: "Practical Statistics for Data Scientists", author: "Peter Bruce", image: "images/practical-stats.jpg" }
    ],
    "devops": [
      { title: "The Phoenix Project", author: "Gene Kim", image: "images/phoenix-project.jpg" },
      { title: "The DevOps Handbook", author: "Gene Kim et al.", image: "images/devops-handbook.jpg" },
      { title: "Accelerate", author: "Nicole Forsgren", image: "images/accelerate.jpg" },
      { title: "Site Reliability Engineering", author: "Beyer et al.", image: "images/sre.jpg" },
      { title: "Infrastructure as Code", author: "Kief Morris", image: "images/infrastructure-code.jpg" }
    ]
  };
  
  categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedCategory = item.getAttribute('data-category');
      categoryTitle.textContent = item.textContent + " Books";
      const books = categoryData[selectedCategory];
      let html = '';
      books.forEach(book => {
        html += `
          <article class="book-item">
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <button class="add-to-cart">Add to Cart</button>
          </article>
        `;
      });
      categoryBooksContainer.innerHTML = html;
      // Re-attach add-to-cart event listeners for new items
      const newAddToCartButtons = categoryBooksContainer.querySelectorAll('.add-to-cart');
      newAddToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
          alert('Book added to cart!');
        });
      });
    });
  });
});
