function countdown() {
  let nextYear = new Date("2026-01-01T00:00:00");
  //   console.log(nextYear);

  let timeNow = new Date();
  //   console.log(timeNow);

  let timeRemaining = nextYear - timeNow;
  //   console.log(timeRemaining);

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const second = 1000;

  let days = Math.floor(timeRemaining / day);
  let hours = Math.floor((timeRemaining % day) / hour);
  let minutes = Math.floor((timeRemaining % hour) / minute);
  let seconds = Math.floor((timeRemaining % minute) / second);
  //   console.log(seconds);

  let prefixDays = days < 10 ? "0" : "";
  let prefixHours = hours < 10 ? "0" : "";
  let prefixMinutes = minutes < 10 ? "0" : "";
  let prefixSeconds = seconds < 10 ? "0" : "";

  document.body.innerHTML = "";
  document.write(
    `Còn ${prefixDays}${days} ngày ${prefixHours}${hours} giờ ${prefixMinutes}${minutes} phút ${prefixSeconds}${seconds} giây là đến tết 2026`
  );
}
setInterval(countdown, 1000);
