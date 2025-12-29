function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
