// importing blog post data
import blogPosts from './blog-posts.js';

// Fetching DOM elements to populate
const articlesHtml = document.getElementById('articles');
const containerHtml = document.querySelector('.container');
const headerHtml = document.querySelector('.header');

// Functions on populating DOM elements
function generateHeader() {
    headerHtml.innerHTML += `
        <a href="index.html">
          <div class="logo">
            <img src="images/image 17.png" alt="Logo image" />
            <p>My learning journal</p>
          </div>
        </a>

        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about-me.html">About me</a></li>
          </ul>
        </nav>
    `
};

function generatePosts() {
    blogPosts.map(post => {
        articlesHtml.innerHTML += `
            <article class="blog-post">
                <img src="${post.image}" class="blog-post-img" alt="" />
                <a href="./blog-post.html" class="blog-post-link">
                <p class="subheading">${post.date}</p>
                <h3 class="blog-heading">${post.heading}</h3>
                <p>
                ${post.content}
                </p>
                </a>
            </article>
        
        `
    });
    articlesHtml.innerHTML += `
        <article class="view-more">
            <a href="#">View more</a>
        </article>
        `
}

function generateFooter() {
    containerHtml.insertAdjacentHTML('beforeend', `
        <footer>
            <p class="footer-name">My Learning Journal</p>
            <p class="footer-copyright">Copyright ©2022</p>
        </footer>`
    );
}

// Executing the population functions
generateHeader()
generatePosts()
generateFooter()