const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

function closeModal() {
  modal.style.display = "none";
}

function downloadImage(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
