
const main_menu = document.querySelector('#main-menu');
const main_menu_close_button = main_menu.querySelector('.close')


const toggleMainMenu = () => {
	main_menu.classList.toggle("hide")
}

main_menu_close_button.addEventListener('click', () => {
	toggleMainMenu()
});