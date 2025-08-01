function showSurprise() {
  alert("🎉 Surprise! Enjoy your special day! 🎉");

  // Show hidden birthday message
  document.getElementById('surpriseMessage').style.display = 'block';

  // Create confetti
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(confetti);

    // Remove after 6 seconds
    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }
}
