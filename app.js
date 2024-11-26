// Smooth Scroll for Links
document.querySelectorAll('.link-container a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });


document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const emailField = document.getElementById('email');
  const emailValue = emailField.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    alert('Please enter a valid email address.');
    emailField.focus();
  } else {
    alert('Form submitted successfully!');
    this.reset();
  }
});


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    if (item.tagName === "IMG") {
      modalImg.src = item.src;
      modalImg.style.display = "block";
      modalVideo.style.display = "none";
    } else if (item.tagName === "VIDEO") {
      modalVideo.src = item.querySelector("source").src;
      modalVideo.style.display = "block";
      modalImg.style.display = "none";
    }
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.pause(); // Pause video when modal is closed
});
