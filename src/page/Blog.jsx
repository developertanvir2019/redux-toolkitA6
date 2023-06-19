import React from 'react';

const Blog = () => {
    return (
        <body>
            <div class="container mt-8">
                <a href="index.html" class="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    class="mr-2 fa-solid fa-house"></i>Go Home</a>
            </div>
            <section class="post-page-container">
                <main class="post">
                    <img src="./images/mern.webp" alt="githum" class="w-full rounded-md" id="lws-megaThumb" />
                    <div>
                        <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
                            MERN stack for Web Development
                        </h1>
                        <div class="tags" id="lws-singleTags">
                            <span>#python,</span> <span>#tech,</span> <span>#git</span>
                        </div>
                        <div class="btn-group">
                            <button class="like-btn" id="lws-singleLinks">
                                <i class="fa-regular fa-thumbs-up"></i> 100
                            </button>
                            <button class="active save-btn" id="lws-singleSavedBtn">
                                <i class="fa-regular fa-bookmark"></i> Saved
                            </button>
                        </div>
                        <div class="mt-6">
                            <p>
                                A MERN stack comprises a collection of four frameworks (MongoDB,
                                ExpressJs, ReactJs and NodeJs) used to develop full-stack
                                javascript solutions for rapid, scalable, and secure applications.
                                Each framework serves a different purpose in creating successful
                                web applications. It is an excellent choice for companies looking
                                to develop high-quality responsive applications quickly using just
                                one language.
                            </p>
                        </div>
                    </div>
                </main>
                {/* <!-- related posts --> */}
                <aside>
                    <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
                    <div class="space-y-4 related-post-container">
                        {/* <!-- related post  --> */}
                        <div class="card">
                            <a href="post.html">
                                <img src="./images/git.webp" class="card-image" alt="" />
                            </a>
                            <div class="p-4">
                                <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
                                    Top Github Alternatives
                                </a>
                                <div class="mb-0 tags">
                                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                                </div>
                                <p>2010-03-27</p>
                            </div>
                        </div>
                        {/* <!-- related post ends --> */}
                        {/* <!-- related post  --> */}
                        <div class="card">
                            <a href="post.html">
                                <img src="./images/ai.jpg" class="card-image" alt="" />
                            </a>
                            <div class="p-4">
                                <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
                                    The future of Artificial Inteligence
                                </a>
                                <div class="mb-0 tags">
                                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                                </div>
                                <p>2020-07-15</p>
                            </div>
                        </div>
                        {/* <!-- related post ends --> */}
                    </div>
                </aside>
                {/* <!-- related posts ends --> */}
            </section>
        </body>
    );
};

export default Blog;