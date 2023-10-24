function revealFeature(letter) {
  document.getElementById(`img-${letter}`).classList.remove("hidden");
  document
    .querySelector(
      `.img-container .hide-button[onclick="hideImage('${letter}')"]`
    )
    .classList.remove("hidden");
}

function hideImage(letter) {
  document.getElementById(`img-${letter}`).classList.add("hidden");
  document
    .querySelector(
      `.img-container .hide-button[onclick="hideImage('${letter}')"]`
    )
    .classList.add("hidden");
}
