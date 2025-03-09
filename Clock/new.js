const time = () => {
  const time = new Date();
  let hours = time.getHours();
  hours = hours > 12 ? `0${hours % 12}` : hours;
  hours = hours.toString().padStart(2, 0);
  const minutes = time.getMinutes().toString().padStart(2, 0);
  const sec = time.getSeconds().toString().padStart(2, 0);
  const clock = `${hours}:${minutes}:${sec}`;
  document.getElementById("clock").innerText = clock;
};
setInterval(time, 1000);
