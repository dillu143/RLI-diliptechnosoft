function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const update = () => {
    if (count < target) {
      count += Math.ceil(target / 100);
      counter.innerText = count;
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };

  update();
});
