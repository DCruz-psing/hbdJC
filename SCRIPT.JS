function showMessage() {
  const surpriseText = document.getElementById("surprise");

  surpriseText.textContent = "🎈¡Feliz vida, abundancia, salud y momentos inolvidables!🎁";

  const photos = [
    'FOTO1.jpg',
    'FOTO2.jpg',
    'FOTO4.jpg',
    'FOTO3.jpg'
  ];

  const gallery = document.getElementById('photoGallery');
  gallery.innerHTML = '';
  gallery.style.display = 'flex';

  // Animación escalonada
  photos.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Foto de felicitación';
    img.style.opacity = '0'; // Inicialmente invisible
    img.style.animation = `fadeInZoom 0.8s ease ${index * 0.5}s forwards`; // Delay gradual
    gallery.appendChild(img);
  });

  surpriseText.style.animation = "fadeIn 1s ease-in-out";

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}
