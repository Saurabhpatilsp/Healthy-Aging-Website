// Smooth scroll to section
const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// Toggle mobile menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Countdown timer
const countdown = document.querySelector('.countdown');
const countdownDate = new Date('December 31, 2050 23:59:59').getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div>${days} <span>Days</span></div>
    <div>${hours} <span>Hours</span></div>
    <div>${minutes} <span>Minutes</span></div>
    <div>${seconds} <span>Seconds</span></div>
  `;

  if (distance < 0) {
    clearInterval(timer);
    countdown.innerHTML = "EXPIRED";
  }
}, 1000);
