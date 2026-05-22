// ===================================================
// BrewNest — Main JavaScript
// Features:
//   1. Sticky Navbar with scroll effect
//   2. Mobile Hamburger Menu
//   3. Scroll Reveal Animations
//   4. Active Nav Link on Scroll (Spy)
//   5. Menu Filter Tabs
//   6. Add to Cart Toast Notification
//   7. Contact Form Submission
// ===================================================


// ---------------------------------------------------
// 1. STICKY NAVBAR — adds shadow when user scrolls
// ---------------------------------------------------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ---------------------------------------------------
// 2. HAMBURGER MENU — toggle mobile nav
// ---------------------------------------------------
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ---------------------------------------------------
// 3. SCROLL REVEAL — animate elements into view
//    Uses IntersectionObserver (modern, efficient)
// ---------------------------------------------------
const revealElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate only once
    }
  });
}, {
  threshold: 0.15  // trigger when 15% of element is visible
});

revealElements.forEach(el => revealObserver.observe(el));


// ---------------------------------------------------
// 4. ACTIVE NAV LINK — highlight current section
// ---------------------------------------------------
const sections  = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px'  // triggers around middle of viewport
});

sections.forEach(section => spyObserver.observe(section));


// ---------------------------------------------------
// 5. MENU FILTER — show/hide cards by category
// ---------------------------------------------------
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards  = document.querySelectorAll('.menu-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    menuCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


// ---------------------------------------------------
// 6. ADD TO CART — show toast notification
// ---------------------------------------------------
let cartTotal = 0;  // tracks total items added

function addToCart(itemName, price) {
  cartTotal++;

  const toast    = document.getElementById('cartToast');
  const msg      = document.getElementById('cartMsg');
  const countEl  = document.getElementById('cartCount');

  // Update toast content
  msg.textContent = `${itemName} added! ✅`;
  countEl.textContent = cartTotal;

  // Show toast
  toast.classList.add('show');

  // Hide after 2.5 seconds
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}


// ---------------------------------------------------
// 7. CONTACT FORM — handle submit with feedback
// ---------------------------------------------------
function handleSubmit(event) {
  event.preventDefault();  // stop page from reloading

  const btn     = event.target.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');

  // Simulate sending (real projects use fetch/API here)
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent    = 'Message Sent! ✅';
    btn.style.background = '#2D7A4F';
    success.style.display = 'block';

    // Reset after 4 seconds
    setTimeout(() => {
      event.target.reset();
      btn.textContent      = 'Send Message ✉️';
      btn.style.background  = '';
      btn.disabled         = false;
      success.style.display = 'none';
    }, 4000);
  }, 1200);
}


// ---------------------------------------------------
// SMOOTH SCROLL — for nav links (fallback support)
// ---------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
