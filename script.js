// ✅ Run after DOM load
document.addEventListener("DOMContentLoaded", function () {

  // 🔥 HEADER FOOTER LOAD
  async function loadComponent(id, file) {
    try {
      const res = await fetch(file);
      const data = await res.text();
      document.getElementById(id).innerHTML = data;
    } catch (err) {
      console.error("Component load error:", err);
    }
  }

  loadComponent("header", "/components/header.html");
  loadComponent("footer", "/components/footer.html");

});


// 🔽 MAIN TIMER
let interval;

function scrollToTimer() {
  const section = document.getElementById("timerSection");

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    startTimer();
  }
}

function startTimer() {
  let time = 20;
  let timer = document.querySelector(".timer");

  if (!timer) return;

  clearInterval(interval);

  interval = setInterval(() => {
    time--;
    timer.innerText = time;

    if (time <= 0) {
      clearInterval(interval);

      const btn = document.getElementById("nextBtn");
      if (btn) {
        btn.style.display = "block";
        btn.scrollIntoView({ behavior: "smooth" });
        startButtonTimer();
      }
    }
  }, 1000);
}


// 🔽 BUTTON TIMER (10 sec)
function startButtonTimer() {
  let time = 10;
  const btn = document.getElementById("nextBtn");

  if (!btn) return;

  btn.disabled = true;
  btn.innerText = `कृपया प्रतीक्षा करें (${time})`;

  let btnInterval = setInterval(() => {
    time--;
    btn.innerText = `कृपया प्रतीक्षा करें (${time})`;

    if (time <= 0) {
      clearInterval(btnInterval);

      btn.disabled = false;
      btn.innerText = "निःशुल्क वीडियो कॉल";
    }
  }, 1000);
}