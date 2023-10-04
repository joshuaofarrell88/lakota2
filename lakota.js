function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const fullImage = document.getElementById('fullImage');
  const closeModal = document.getElementById('closeModal');

  fullImage.src = imageSrc;
  fullImage.style.maxWidth = "50%"; 
    fullImage.style.maxHeight = "80vh"; 
  modal.style.display = 'block';

  closeModal.onclick = function () {
    modal.style.display = 'none';
  };
}
