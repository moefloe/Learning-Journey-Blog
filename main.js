const headingContainer = document.getElementById('heading-container')
const mainBody = document.getElementById('blog-posts-grid')
const viewMore = document.getElementById('view-more')
const moreBlogPostsDiv = document.getElementById('more-blog-posts')
const footerContainer = document.getElementById('footer')

let cardsAreDisplayed = false

renderNavMenu()
viewBlogLinks()
renderFooter()

function renderNavMenu() {

    headingContainer.innerHTML += `        
    <div id="logo-container">
    <a href="index.html">
        <img src="../images/logo@2x.png" alt="a logo text spelling out My Learning Journey">
    </a>
    </div>
    <nav>
        <span id="hamburger-btn">🟰</span>
        <ul id="mobile-nav-container">
            <li class='nav-item'>
                <a href='index.html'>Home</a>
            </li>
            <li class='nav-item'>
                <a href='about.html'>About me</a>
            </li>
        </ul>
        <ul id="nav-links-container">
            <li>
                <a href='index.html'>Home</a>
            </li>
            <li>
                <a href='about.html'>About me</a>
            </li>
        </ul>
    </nav>
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

// Initially I'm rendering the link text and making the additional blog cards hidden by default
// We will call back on this function again when the link is clicked

function viewBlogLinks() {
    viewMore.textContent = 'View More'
    moreBlogPostsDiv.innerHTML = ''
    cardsAreDisplayed = false
}

// Function to display the additional cards when called upon

function renderAdditionalCards() {

    moreBlogPostsDiv.innerHTML = `        
    <div class="blog-card">
        <a href='journey.html'>
            <div class="blog-text">
                <div class="img-block">
                    <img src="/images/pen-and-paper.jpg" alt="image of a pen sitting on an open book">
                </div>
                <p class="date-txt">July 23, 2022</p>
                <h2>Blog Four</h2>
                <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Career Path.
                </p>
            </div>
        </a>
    </div>
    <div class="blog-card">
        <a href='journey.html'>
            <div class="blog-text">
                <div class="img-block">
                    <img src="/images/tablet.jpg" alt="image of a tablet sitting on a wooden table">
                </div>
                <p class="date-txt">July 23, 2022</p>
                <h2>Blog Five</h2>
                <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Career Path.
                </p>
            </div>
        </a>
    </div>
    <div class="blog-card">
        <a href='journey.html'>
            <div class="blog-text">
                <div class="img-block">
                    <img src="/images/typing.jpg" alt="image of hands typing on a laptop">
                </div>
                <p class="date">July 23, 2022</p>
                <h2>Blog Six</h2>
                <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Career Path.
                </p>
            </div>
        </a>
    </div>`
}

// Event listener to toggle the additional blog cards and update the view-more text

viewMore.addEventListener('click', function () {
    console.log("clicked")
    if (!cardsAreDisplayed) {
        renderAdditionalCards()
        cardsAreDisplayed = true
        viewMore.textContent = 'View Less'
    } else {
        viewBlogLinks()
    }
})

// Adding the footer dynamically through JS

function renderFooter() {
    footerContainer.innerHTML += `
    <p>Coded by Alpha Bah for Scrimba Frontend Dev Bootcamp</p>
    `
}


const recentPostsDiv = document.getElementById('recent-posts-container')

// This same function is present on the other pages except the main one

function renderRecentPosts() {
    recentPostsDiv.innerHTML = `
    <h4 id="recent-posts">Recent Posts</h4>
    <div id="blog-posts-grid">
        <div class="blog-card">
            <a href="journey.html">
                <div class="blog-text">
                    <div class="img-block">
                        <img src="../images/open-laptop.jpg" alt="">
                    </div>
                    <p class="date-txt">July 23, 2022</p>
                    <h2>Blog One</h2>
                    <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                        After several months of learning in the Frontend Career Path.
                    </p>
                </div>
            </a>
        </div>
        <div class="blog-card">
            <a href="journey.html">
                <div class="blog-text">
                    <div class="img-block">
                        <img src="../images/passion.jpg" alt="">
                    </div>
                    <p class="date-txt">July 23, 2022</p>
                    <h2>Blog Two</h2>
                    <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                        After several months of learning in the Frontend Career Path.
                    </p>
                </div>
            </a>
        </div>
        <div class="blog-card">
            <a href="journey.html">
                <div class="blog-text">
                    <div class="img-block">
                        <img src="../images/tablet.jpg" alt="">
                    </div>
                    <p class="date-txt">July 23, 2022</p>
                    <h2>Blog Three</h2>
                    <p>I'm excited to start a new learing journey as a Scrimba Bootcamp student!
                        After several months of learning in the Frontend Career Path.
                    </p>
                </div>
                </a>
        </div>
    </div> 
    `
}

renderRecentPosts()