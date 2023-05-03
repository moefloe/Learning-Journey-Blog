
const navBar = document.getElementById('navbar')
const viewMore = document.getElementById('view-more')
const mainBody = document.getElementById('blog-posts-grid')
const footerContainer = document.getElementById('footer')

renderNavMenu()
renderFooter()

function renderNavMenu() {

    navBar.innerHTML += `        
    <div id="logo">
    <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
    <g transform="rotate(350 8 8)"><path fill="currentColor" d="M8 1C3.6 1 0 3.5 0 6.5c0 2 2 3.8 4 
    4.8c0 2.1-2 2.8-2 2.8c2.8 0 4.4-1.3 5.1-2.1H8c4.4 0 8-2.5 8-5.5S12.4 1 8 1zM5 8c-.6 
    0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1zm3 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 
    1zm3 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1z" />
    </g></svg></i><a href='../Main/main.html'>My Learning Journal</a>
    </div>
        <span id="hamburger-btn">🟰</span>
        <ul id="mobile-nav-container">
            <li class='nav-item'>
                <a href='../Main/main.html'>Home</a>
            </li>
            <li class='nav-item'>
                <a href='../About Me/about.html'>About me</a>
            </li>
        </ul>
        <ul id="nav-links-container">
            <li>
                <a href='../Main/main.html'>Home</a>
            </li>
            <li>
                <a href='../About Me/about.html'>About me</a>
            </li>
    </ul>
`

    // Adding an event listnener for the mobile menu

    const hamburgerbtn = document.getElementById('hamburger-btn')
    const mobileMenu = document.getElementById('mobile-nav-container')

    hamburgerbtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('visible')
    })

    // Adding an event listener to close the mobile menu when a link has been clicked

    const navItems = document.querySelectorAll('.nav-item')
    navItems.forEach(function (navItem) {
        navItem.addEventListener('click', function () {
            mobileMenu.classList.remove('visible')
        })
    })
}

// Adding the footer dynamically through JS

function renderFooter() {
    footerContainer.innerHTML += `
    <p>Coded by Alpha Bah for Scrimba Frontend Dev Bootcamp</p>
    `
}
// Dynamically adding content to the main page when view more is clicked

viewMore.addEventListener('click', function () {
    mainBody.innerHTML +=
        `
 <div class="blog-card">
            <div class="blog-text">
                <div class="img-block">
                    <img src="../images/pen-and-paper.jpg" alt="image of a pen sitting on an open book">
                </div>
                <p class="date-txt">July 23, 2022</p>
                <h2>Blog Four</h2>
                <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Career Path.
                </p>
            </div>
        </div>
        <div class="blog-card">
            <div class="blog-text">
                <div class="img-block">
                    <img src="../images/tablet.jpg" alt="image of a tablet sitting on a wooden table">
                </div>
                <p class="date-txt">July 23, 2022</p>
                <h2>Blog Five</h2>
                <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Career Path.
                </p>
            </div>
        </div>
        <div class="blog-card">
            <div class="blog-text">
                <div class="img-block">
                    <img src="../images/typing.jpg" alt="image of hands typing on a laptop">
                </div>
                <p class="date">July 23, 2022</p>
                <h2>Blog Six</h2>
                <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Career Path.
                </p>
            </div>
        </div>
 `
})
