/* SIDE BAR BUTTON  */
const sidebar = document.getElementsByClassName('sidebar')[0];
const menuButton = document.getElementById('menu-button');
const xButton = document.getElementById('x-button');

menuButton.onclick = function() {
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'flex';
    } else {
        sidebar.style.display = 'none';
    }
};

xButton.onclick = function() {
    sidebar.style.display = 'none';
};
