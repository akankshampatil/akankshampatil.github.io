const main = document.getElementById("main-content");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function navigate(page) {
  fetch(`${page}.html`)
    .then(res => res.text())
    .then(html => {
      main.innerHTML = html;
      window.scrollTo(0, 0);
    });
}

function openModal(contentHTML) {
  modalBody.innerHTML = contentHTML;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
}

// Load home by default
navigate("home");
