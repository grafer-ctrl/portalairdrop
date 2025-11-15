// Modal Iframe
const modal = document.getElementById('embed-modal');
const iframe = document.getElementById('embed-iframe');
const title = document.getElementById('modal-title');
const fallback = document.getElementById('fallback-link');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.dataset.url;
    const siteTitle = card.dataset.title;
    
    title.textContent = `${siteTitle} - Live Airdrop`;
    iframe.src = url;
    fallback.href = url;
    modal.style.display = 'block';
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
  iframe.src = '';
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
    iframe.src = '';
  }
};