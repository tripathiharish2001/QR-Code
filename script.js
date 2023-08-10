const gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
const myimg = document.getElementById("qr-img");
const mytext = document.getElementById("qrtext");
const qrDimensions = document.getElementById("dimensions");
const btnGenerate = document.querySelector(".generateBtn");
const btnDownload = document.querySelector(".downloadBtn");

btnGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  const getText = mytext.value;
  const optValue = qrDimensions.options[qrDimensions.selectedIndex].value;
  console.log(optValue);
  if (getText !== "") {
    myimg.src = `${gapi}${optValue}x${optValue}&chl=${getText}`;
    myimg.style.height = `${optValue / 10}rem`;
    myimg.style.width = `${optValue / 10}rem`;
  } else {
    alert("Please Enter Text");
  }
});

btnDownload.addEventListener("click", (e) => {
  // e.defaultPrevented();
  const getText = mytext.value;
  if (getText === "") {
    alert("First generate a QR Code!");
    return;
  }
  const ch = String.fromCharCode(Math.trunc(Math.random() * 26) + 97);
  const num = String(Date.now()).substring(7);
  btnDownload.setAttribute("download", `QR-${num}${ch}`);
  btnDownload.setAttribute("href", myimg.getAttribute("src"));
});
