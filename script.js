/* ==========================================
   COUNTDOWN
========================================== */

const reunionDate = new Date(
  "2026-12-17T00:00:00-05:00"
);

function updateCountdown() {

  const now = new Date();

  const difference = reunionDate - now;

  if (difference <= 0) {
    document.getElementById("countdown-days").textContent = "0";
    return;
  }

  const days = Math.ceil(
    difference / (1000 * 60 * 60 * 24)
  );

  document.getElementById("countdown-days").textContent = days;
}


/* ==========================================
   SEOUL + D.C. CLOCKS
========================================== */

function updateClocks() {

  const now = new Date();


  /* SEOUL */

  const seoulDate = now.toLocaleDateString(
    "en-GB",
    {
      timeZone: "Asia/Seoul",
      weekday: "short",
      day: "2-digit",
      month: "short"
    }
  );

  const seoulTime = now.toLocaleTimeString(
    "en-US",
    {
      timeZone: "Asia/Seoul",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }
  );


  /* WASHINGTON D.C. */

  const dcDate = now.toLocaleDateString(
    "en-GB",
    {
      timeZone: "America/New_York",
      weekday: "short",
      day: "2-digit",
      month: "short"
    }
  );

  const dcTime = now.toLocaleTimeString(
    "en-US",
    {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }
  );


  /* PUT VALUES INTO HTML */

  document.getElementById("seoul-date").textContent = seoulDate;
  document.getElementById("seoul-time").textContent = seoulTime;

  document.getElementById("dc-date").textContent = dcDate;
  document.getElementById("dc-time").textContent = dcTime;
}


/* ==========================================
   INITIALIZE
========================================== */

updateCountdown();
updateClocks();


/* Update countdown every minute */

setInterval(updateCountdown, 60000);


/* Update clocks every 30 seconds */

setInterval(updateClocks, 30000);