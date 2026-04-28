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
  let text = document.querySelector(".timer-text");

  if (!timer) return;

  // ⏳ starting text
  if (text) {
    text.innerText = "लिंक तैयार हो रहा है...";
  }

  clearInterval(interval);

  interval = setInterval(() => {
    time--;
    timer.innerText = time;

    if (time <= 0) {
      clearInterval(interval);

      // ✅ change text
      if (text) {
        text.innerText = "👇 नीचे स्क्रोल करें और बटन दबाएं";
      }

      // ✅ show button
      const btn = document.getElementById("nextBtn");
      if (btn) {
        btn.style.display = "block";

        // 🔥 scroll to button
        btn.scrollIntoView({ behavior: "smooth" });

        // 🔥 start button timer
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

      // ✅ enable click
      btn.onclick = function () {
        goToSite3();
      };
    }
  }, 1000);
}


// 🔗 SMART REDIRECT (2-LAYER SYSTEM)
function goToSite3() {

  const layer2Pages = [
    "best-credit-card-for-beginners-india.html",
    "best-loan-apps-india-instant-cash.html",
    "business-loan-without-collateral-india.html",
    "emergency-loan-online-instant-approval.html",
    "get-personal-loan-without-credit-check.html",
    "get-a-loan-without-cibil-score.html",
    "instant-loan-online-approval-in-minutes.html",
    "low-interest-personal-loan-online-india.html",
    "same-day-payday-loan-online.html",
    "student-loan-without-guarantor-india.html"
  ];

  // 🔥 correct current page detect
  let currentPage = window.location.pathname;

  // remove folder path
  currentPage = currentPage.substring(currentPage.lastIndexOf("/") + 1);

  // remove query params
  currentPage = currentPage.split("?")[0];

  console.log("Current Page:", currentPage);

  // ✅ Layer 2 → FINAL
  if (layer2Pages.includes(currentPage)) {

    window.location.href = "https://wpsite.dirtypush.com/";

  } else {

    // 🔥 Layer 1 → random Layer 2
    const randomPage = layer2Pages[Math.floor(Math.random() * layer2Pages.length)];

    window.location.href = "/" + randomPage; // ✅ ROOT FIX
  }
}