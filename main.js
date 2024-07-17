
const markAll = document.querySelector('#mark-all');
const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
    post.addEventListener('click', () => {
        post.querySelector('.status').classList.remove('not-read');
        post.querySelector('.status').classList.add('read'); // Añadir la clase 'read'
        updateNotifications();
    });
});

markAll.addEventListener('click', () => {
    const notReadElements = document.querySelectorAll('.not-read');
    
    notReadElements.forEach(notReadElement => {
        notReadElement.classList.remove('not-read'); // Quitar la clase 'not-read'
        notReadElement.classList.add('read'); // Añadir la clase 'read'
    });
    updateNotifications();
});

const updateNotifications = () => {
    const notReadElementsActual = document.querySelectorAll('.not-read');
    numberElement.innerText = notReadElementsActual.length;
}
