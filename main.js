let menu,sideBar;
 menu = document.getElementById('menu');
 sideBar = document.getElementById('sidebar');

menu.addEventListener('click',function(){
	sideBar.classList.toggle('active');
	menu.classList.toggle('move');
	
})
