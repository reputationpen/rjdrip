document.lastScrollPosition = 0;

document.addEventListener('scroll', ()=>{
	const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
	const sections = [...document.querySelectorAll('section')];
	
	const 
	sections.forEach((section,index) => {
		if (window.pageYOffset === section.offsetTop) {
			document.lastCentered = index;
		}
	})
	
	
	
	
	document.lastScrollPosition = window.pageYOffset;
})