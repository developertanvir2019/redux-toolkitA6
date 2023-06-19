import React from 'react';
import webp from '../images/git.webp'
const Posts = () => {
    return (
        <main class="post-container" id="lws-postContainer">
            <div class="lws-card">
                <a href="post.html">
                    <img src={webp} class="lws-card-image" alt="" />
                </a>
                <div class="p-4">
                    <div class="lws-card-header">
                        <p class="lws-publishedDate">2023-05-01</p>
                        <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>100</p>
                    </div>
                    <a href="post.html" class="lws-postTitle"> Top Github Alternatives </a>
                    <div class="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
                    <div class="flex gap-2 mt-4">
                        <span class="lws-badge"> Saved </span>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Posts;