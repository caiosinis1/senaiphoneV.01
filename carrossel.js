

function openCartModal() {
  document.getElementById('cartModal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closeCartModal() {
  document.getElementById('cartModal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
let currentIndex = 0;
const items = document.querySelector('.slider');
const totalItems = document.querySelectorAll('.item').length;

function updateSlide() {
  items.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSlide();
}
