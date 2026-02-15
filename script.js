console.log("Custom modern JS loaded successfully!");
document.addEventListener("DOMContentLoaded", () => {
  // ===== MODERN DROPDOWN =====
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector(".dropbtn");
    const menu = dropdown.querySelector(".dropdown-content");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      menu.classList.toggle("show");
      // Close other open dropdowns
      dropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.querySelector(".dropdown-content").classList.remove("show");
        }
      });
    });
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector(".dropdown-content").classList.remove("show");
      }
    });
  });

  // ===== SMOOTH NAV LINK SCROLL =====
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // ===== CONTACT FORM MODERN HANDLING =====
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields!");
      return;
    }

    // Show modern success message with animation
    successMessage.textContent = `Thanks, ${name}! We'll be in touch soon.`;
    successMessage.style.display = "block";
    successMessage.style.opacity = "0";
    successMessage.style.transition = "opacity 0.4s";
    requestAnimationFrame(() => {
      successMessage.style.opacity = "1";
    });

    // Reset form
    contactForm.reset();

    // Hide after 4 seconds smoothly
    setTimeout(() => {
      successMessage.style.opacity = "0";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 400);
    }, 4000);
  });

  // ===== BOOK APPOINTMENT BUTTON =====
  const bookBtn = document.querySelector(".btn-secondary");
  bookBtn.addEventListener("click", () => {
    window.open("https://calendly.com/", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // ===== JS Active Indicator =====
  const status = document.createElement("div");
  status.textContent = "✅ JavaScript is running!";
  Object.assign(status.style, {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    backgroundColor: "#1dda65ff",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "600",
    zIndex: "9999",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  });
  document.body.appendChild(status);

  // Remove after 3 seconds
  setTimeout(() => status.remove(), 3000);
});
