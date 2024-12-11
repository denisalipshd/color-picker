const tAcakWarna = document.getElementById("acakwarna");
tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  rgbValue.textContent = `RGB: ${r}, ${g}, ${b}`;
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
const rgbValue = document.getElementById("rgbValue");

function updateColor() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  rgbValue.textContent = `RGB: ${r}, ${g}, ${b}`;
}

sMerah.addEventListener("input", updateColor);
sHijau.addEventListener("input", updateColor);
sBiru.addEventListener("input", updateColor);

function updateBoxColor() {
  document.querySelector(".merah").style.backgroundColor = `rgb(${sMerah.value}, 0, 0)`;
  document.querySelector(".hijau").style.backgroundColor = `rgb(0, ${sHijau.value}, 0)`;
  document.querySelector(".biru").style.backgroundColor = `rgb(0, 0, ${sBiru.value})`;
}

sMerah.addEventListener("input", updateBoxColor);
sHijau.addEventListener("input", updateBoxColor);
sBiru.addEventListener("input", updateBoxColor);

const tReset = document.getElementById("resetwarna");
tReset.addEventListener("click", function () {
  sMerah.value = 0;
  sHijau.value = 0;
  sBiru.value = 0;
  document.body.style.backgroundColor = "rgb(255, 255, 255)";
  rgbValue.textContent = "RGB: 0, 0, 0";
});
