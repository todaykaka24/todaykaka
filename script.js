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

  if (text) {
    text.innerText = "लिंक तैयार हो रहा है...";
  }

  clearInterval(interval);

  interval = setInterval(() => {
    time--;
    timer.innerText = time;

    if (time <= 0) {
      clearInterval(interval);

      if (text) {
        text.innerText = "👇 नीचे स्क्रोल करें और बटन दबाएं";
      }

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

      btn.onclick = function () {
        goToSite3();
      };
    }
  }, 1000);
}


// 🔗 🔥 3-LAYER SMART REDIRECT
function goToSite3() {

  // ✅ Layer 2 (internal pages)
  const layer2Pages = [
    "instant-approval-credit-cards-india.html",
    "instant-loan-online-approval-in-minutes.html",
    "latest-home-loan-interest-rates-india-2026.html",
    "loan-against-salary-instant-approval.html",
    "low-interest-personal-loan-online-india.html",
    "online-loan-for-unemployed-india.html",
    "personal-loan-emi-calculator-guide.html",
    "same-day-payday-loan-online.html",
    "student-loan-without-guarantor-india.html",
    "trusted-loan-apps-india-instant-approval.html"
  ];

  // ✅ Layer 3 (FINAL OUTER LINKS)
  const layer3Pages = [
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/",
    "https://wpsite.dirtypush.com/"
  ];

  // 🔍 current page detect
  let currentPage = window.location.pathname
    .split("/")
    .pop()
    .split("?")[0]
    .toLowerCase();

  console.log("Current Page:", currentPage);

  const normalizedLayer2 = layer2Pages.map(p => p.toLowerCase());

  // ✅ Layer 2 → Layer 3
  if (normalizedLayer2.includes(currentPage)) {
    console.log("✅ Layer 2 → Layer 3");

    const finalURL = layer3Pages[Math.floor(Math.random() * layer3Pages.length)];
    window.location.href = finalURL;
  } 
  
  // ✅ Layer 1 → Layer 2
  else {
    console.log("➡️ Layer 1 → Layer 2");

    const nextPage = layer2Pages[Math.floor(Math.random() * layer2Pages.length)];
    window.location.href = "/" + nextPage;
  }
}