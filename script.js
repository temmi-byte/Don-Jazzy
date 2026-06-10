const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.10 }
);

revealItems.forEach((item) => revealObserver.observe(item));



const contactForm = document.getElementById('contactForm');
const CONTACT_EMAIL = 'info@mavinrecords.com';

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const subject = String(formData.get('subject') || '').trim();
  const message = String(formData.get('message') || '').trim();

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message
  ].join('\n');

  const mailtoUrl =
    `mailto:${encodeURIComponent(CONTACT_EMAIL)}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});


const siteNav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");

window.addEventListener("scroll", () => {

    // Desktop
    if (window.innerWidth > 768) {

        if (window.scrollY > 300) {

            siteNav.classList.add("is-visible");

        } else {

            siteNav.classList.remove("is-visible");
        }

    }

    // Mobile
    else {

        if (window.scrollY > 300) {

            menuToggle.classList.add("is-visible");

        } else {

            menuToggle.classList.remove("is-visible");

        }

    }

});

const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".mobile-menu__close");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.add("is-open");

});

menuClose.addEventListener("click", () => {

    mobileMenu.classList.remove("is-open");

});

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("is-open");

    });

});