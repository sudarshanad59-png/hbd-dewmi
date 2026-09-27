function revealWish() {
  const wishText = document.getElementById("wishText");
  const btn = document.getElementById("wishBtn");

  wishText.classList.remove("hidden");
  btn.style.display = "none";
}
