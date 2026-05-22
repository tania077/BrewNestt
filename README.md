# BrewNestt ☕ — Artisan Tea & Coffee Website

A fully responsive, multi-section **café website** built with pure HTML, CSS, and JavaScript.  
No frameworks, no libraries — just clean, well-structured frontend code.

![BrewNestt Preview](https://img.shields.io/badge/Status-Live-brightgreen) 
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📌 About the Project

**BrewNestt** is a frontend project for an artisan tea and coffee shop.  
The goal was to build a visually polished, real-world website using only core web technologies — 
making it perfect for learning and demonstrating fundamental frontend skills.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 Responsive Design | Works on mobile, tablet, and desktop |
| 🧭 Sticky Navbar | Highlights active section as you scroll |
| 🍔 Hamburger Menu | Toggles navigation on mobile |
| 🔽 Scroll Animations | Elements fade-in using IntersectionObserver |
| 🗂 Menu Filter | Filter drinks by category (Tea, Coffee, Cold, Snacks) |
| 🛒 Cart Toast | "Add to Cart" button shows a live notification |
| 📬 Contact Form | Validates and simulates form submission |
| ♿ Accessibility | Semantic HTML, ARIA labels, keyboard-friendly |

---

## 🗂 Project Structure

```
BrewNestt/
│
├── index.html          ← Main HTML (all sections)
│
├── css/
│   ├── style.css       ← Layout, components, responsive styles
│   └── animations.css  ← Scroll reveals, entrance animations
│
├── js/
│   └── main.js         ← All JavaScript features (well-commented)
│
└── README.md           ← This file
```

---

## 🚀 Getting Started

No build tools or installations needed.

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/brewnest.git

# Open in browser
open index.html
# or just double-click index.html
```

---

## 💡 JavaScript Concepts Used

Perfect for beginners to study and explain in interviews:

1. **`IntersectionObserver`** — efficient scroll-based animations
2. **`classList.toggle/add/remove`** — dynamic CSS class manipulation
3. **`addEventListener`** — click, scroll, submit event handling
4. **`data-*` attributes** — used for menu category filtering
5. **`setTimeout`** — cart toast auto-dismiss and form feedback
6. **`event.preventDefault()`** — stop default form submission
7. **Template literals** — dynamic cart message content
8. **Modular functions** — `addToCart()`, `handleSubmit()` for reusability

---

## 🎨 CSS Concepts Used

1. **CSS Custom Properties (Variables)** — design tokens for colors, fonts, spacing
2. **CSS Grid & Flexbox** — responsive layout without any framework
3. **`clamp()`** — fluid typography that scales with viewport
4. **Media Queries** — mobile-first responsive breakpoints
5. **CSS Transitions & Animations** — hover effects, float animation, fade-in
6. **`:hover`, `:focus`, `:active`** — interactive state styling
7. **`position: fixed`** — sticky navbar

---

## 📱 Sections

- **Navbar** — sticky, responsive, active link highlighting
- **Hero** — headline, CTA buttons, stats, floating cup card
- **About** — story, features, organic/fair-trade messaging
- **Menu** — filterable grid of 8 items with add-to-cart
- **Gallery** — CSS grid photo layout (placeholder-ready)
- **Testimonials** — customer reviews with featured card
- **Contact** — address details + functional contact form
- **Footer** — brand, links, social buttons

---

## 🔮 Future Improvements

- [ ] Add a real backend (Node.js / PHP) for the contact form
- [ ] Integrate a payment gateway for online ordering
- [ ] Add a dark mode toggle
- [ ] Replace gallery placeholders with real images
- [ ] Add a shopping cart page with local storage

---

## 👨‍💻 Author

**[Your Name]**  
3rd Year B.Tech | [Your College Name]  
[LinkedIn](https://linkedin.com) | [GitHub](https://github.com)

---

## 📄 License

This project is open source under the [MIT License](LICENSE).
