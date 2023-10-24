function showImage(letterA) {
  const resultImage = document.getElementById("resultImage");
  const hideResult = document.getElementById("hideResult");

  resultImage.src = `../images/css-letter-a.png`;
  resultImage.style.display = "block";
  hideResult.style.display = "block";
}

function showImage(letterB) {
  const resultImage = document.getElementById("resultImage");
  const hideResult = document.getElementById("hideResult");

  resultImage.src = `../images/css-letter-b.png`;
  resultImage.style.display = "block";
  hideResult.style.display = "block";
}

function showImage(letterC) {
  const resultImage = document.getElementById("resultImage");
  const hideResult = document.getElementById("hideResult");

  resultImage.src = `../images/css-letter-c.png`;
  resultImage.style.display = "block";
  hideResult.style.display = "block";
}

function hideImage() {
  const resultImage = document.getElementById("resultImage");
  const hideResult = document.getElementById("hideResult");

  resultImage.style.display = "none";
  hideResult.style.display = "none";
}
