document.addEventListener('DOMContentLoaded', function () {
  const navbarNav = document.querySelector('.navbar-nav');
  // Ketika hamburger di klik
  document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
  };

  const galleryContainer = document.getElementById('gallery-container');
  let currentIndex = 0; // Index of the currently displayed image

  function changeImage() {
    // Reset interval if it reaches the last image
    if (currentIndex >= 6) {
      currentIndex = 0;
    }

    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const imgElement = document.createElement('img');
    imgElement.src = "./images/" + (currentIndex + 1) + ".png";
    imgElement.alt = 'Image ' + (currentIndex + 1);

    const captionElement = document.createElement('p');
    captionElement.className = 'caption';

    galleryItem.appendChild(imgElement);
    galleryItem.appendChild(captionElement);

    // Clear previous images
    galleryContainer.innerHTML = '';

    galleryContainer.appendChild(galleryItem);

    // Increment the index for the next image
    currentIndex++;
  }

  // Change image every 2000ms (2 seconds)
  setInterval(changeImage, 2000);

  function submitForm() {
    // Dapatkan formulir
    var form = document.getElementById('registration-form');

    // Simulasikan pengiriman formulir (Anda dapat menggantinya dengan logika pengiriman data ke server)
    // Di sini, kita hanya menampilkan notifikasi untuk tujuan demonstrasi
    alert('Transaksi diterima! Terima kasih.');

    // Tampilkan notifikasi yang sebenarnya
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Set timeout untuk menyembunyikan notifikasi setelah beberapa detik
    setTimeout(function () {
        notification.style.display = 'none';
    }, 3000); // Notifikasi akan disembunyikan setelah 3 detik
}
});




