let right_click_menu = document.getElementById("right-click-menu");
let pointer_position_x = 0;
let pointer_position_y = 0;

window.addEventListener('contextmenu', (event) => {
	event.preventDefault();
	right_click_menu.style.display = "block";
	right_click_menu.style.left = pointer_position_x + "px";
	right_click_menu.style.top = pointer_position_y + "px";
});

document.addEventListener('mousemove', pointer_stats);

function pointer_stats(e){
	pointer_position_x = e.clientX;
	pointer_position_y = e.clientY;
}