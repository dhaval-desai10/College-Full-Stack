// Tiny confetti burst when we have a result
(function () {
  const hasPanel = document.querySelector('.panel.success');
  if (!hasPanel) return;

  // Simple confetti using CSS particles
  const burst = document.createElement('div');
  burst.className = 'confetti';
  for (let i = 0; i < 26; i++) {
    const p = document.createElement('i');
    p.style.setProperty('--i', i);
    burst.appendChild(p);
  }
  document.body.appendChild(burst);

  setTimeout(() => burst.remove(), 1800);
})();
