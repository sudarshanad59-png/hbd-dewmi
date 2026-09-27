function triggerSurprise() {
  // Fire Confetti animation
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff758c', '#ffd700', '#8a2be2', '#ffffff']
  });

  // Show hidden message
  const msg = document.getElementById('hiddenMessage');
  const btn = document.getElementById('surpriseBtn');
  
  btn.style.display = 'none';
  msg.style.display = 'block';
}
