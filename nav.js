const openMenu = () => {
	document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
	document.querySelector('aside').className = '';
}
document.getElementById('menuBtn').onclick = e => {
	e.preventDefault();
	openMenu();
}
document.querySelector('aside a.close').onclick = e => {
	closeMenu()
}