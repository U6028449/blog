const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('body');

if (themeSwitcher) {
let mode = 'dark';


themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});
}

const backButton = document.querySelector('#back-button');
if (backButton) {
backButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.querySelector('#username').value;
        const title = document.querySelector('#title').value;
        const content = document.querySelector('#content').value;

        const post = {
            username: username,
            title: title,
            content: content
        };

        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        posts.push(post);

        localStorage.setItem('blogPosts', JSON.stringify(posts));

        window.location.href = 'post.html';
    });
}

window.onload = function() {
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    let mainContent = document.querySelector('#main-content');

    if (mainContent) {
        posts.forEach((post) => {
  
            let postContainer = document.createElement('div');
            postContainer.setAttribute('class', 'post')
            let postTitle = document.createElement('h2');
            let postContent = document.createElement('p');
            let postAuthor = document.createElement('p');

            postTitle.textContent = post.title;
            postContent.textContent = post.content;
            postAuthor.textContent = post.username;

            
            postTitle.addEventListener('click', function() {
                alert(`Title: ${post.title}\nContent: ${post.content}\nAuthor: ${post.username}`);
            });

            postContainer.appendChild(postTitle);
            postContainer.appendChild(postContent);
            postContainer.appendChild(postAuthor);

            mainContent.appendChild(postContainer);
        });
    }
};