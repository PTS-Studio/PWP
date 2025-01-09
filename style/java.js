document.addEventListener('mousemove', e => {
	const x = e.clientX;
	const y = e.clientY;
	document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,175,75,1), rgba(155,146,10,1))`;
});