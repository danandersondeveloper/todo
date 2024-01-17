
const main_menu = document.querySelector('#main-menu');
const main_menu_close_button = main_menu.querySelector('.close')
const add_new_task_button = document.querySelector('#add-new-task');
const new_task_element = document.querySelector('#new-task')


const toggleMainMenu = () => {
	main_menu.classList.toggle('hide');
}

const toggleNewTask = () => {
	new_task_element.classList.toggle('show');
}

const hide_add_new_task_button = () => {
	add_new_task_button.classList.toggle('hide')
}

add_new_task_button.addEventListener('click', () => {
	toggleNewTask();
	hide_add_new_task_button();
});

main_menu_close_button.addEventListener('click', () => {
	toggleMainMenu();
});