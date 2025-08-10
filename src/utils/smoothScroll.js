// src/utils/smoothScroll.js
export function smoothScrollTo(targetId) {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
