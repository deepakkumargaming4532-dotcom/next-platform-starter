// ================= Scroll Animations =================
document.addEventListener("scroll", function () {
  const animElems = document.querySelectorAll(".fade-in, .slide-in, .slide-left, .slide-right");
  animElems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible"); // replay on scroll up
    }
  });
});

// ================= Contact Form Popup with Pop Sound =================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      // Create popup container
      const popup = document.createElement("div");
      popup.classList.add("popup");
      popup.innerHTML = "<div class='popup-content'>✅ Sending your message...</div>";
      document.body.appendChild(popup);

      // Play pop sound
      const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
      audio.play();

      // Simulate form submit
      setTimeout(() => {
        popup.innerHTML = "<div class='popup-content'>🎉 Message Sent Successfully!</div>";
      }, 1500);

      // Remove popup after 4 sec
      setTimeout(() => {
        popup.remove();
      }, 4000);
    });
  }
});

// ================= Floating Emojis in Inspiration Section =================
function spawnEmoji() {
  const emojis = ["✨", "🏏", "💻", "❤"];
  const container = document.querySelector(".emoji-container");
  if (!container) return;

  const emoji = document.createElement("span");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 90 + "%";
  emoji.style.fontSize = Math.random() * 20 + 20 + "px";
  emoji.style.animationDuration = Math.random() * 3 + 4 + "s";

  container.appendChild(emoji);

  setTimeout(() => emoji.remove(), 6000);
}
setInterval(spawnEmoji, 1000);
document.addEventListener("scroll", function () {
  const motivationQuote = document.querySelector(".quote.typing");
  const rect = motivationQuote.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
    // Restart animation
    motivationQuote.style.animation = "none";
    motivationQuote.offsetHeight; // trigger reflow
    motivationQuote.style.animation = null;
  }
});