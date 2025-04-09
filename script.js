// ✅ FINAL script.js
function openModal(contentHTML) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
      ${contentHTML}
    </div>
  `;
  document.body.appendChild(modal);
}

function navigate(page) {
  window.location.href = `${page}.html`;
}
