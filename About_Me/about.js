const recentPostsDiv = document.getElementById('recent-posts-container')

// This same function is present on the other pages except the main one

renderRecentPosts()

function renderRecentPosts() {
    recentPostsDiv.innerHTML = `
    <h4 id="recent-posts">Recent Posts</h4>
    <div id="blog-posts-grid">
        <div class="blog-card">
            <a href="../Journey/journey.html">
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
            <a href="../Journey/journey.html">
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
            <a href="../Journey/journey.html">
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