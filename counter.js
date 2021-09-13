

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);

}

const obj = document.getElementById("value");
const obj2 = document.getElementById("value2");
const obj3 = document.getElementById("value3");
const obj4 = document.getElementById("value4");

animateValue(obj, 0, 43, 5000);
animateValue(obj2, 0, 7500, 5000);
animateValue(obj3, 0, 130, 5000);
animateValue(obj4, 0, 3400, 5000);

