const rellax = new Rellax('.rellax');

// grabs the media query
const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// if the user prefers reduced motion, disable parallax
if (motionMediaQuery.matches) rellax.destroy();