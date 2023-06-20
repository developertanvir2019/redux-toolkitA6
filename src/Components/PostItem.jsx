import React from 'react';

const PostItem = ({ blog }) => {
    const { title, likes, image, createdAt, isSaved, tags, id } = blog ?? {};
    return (
        <div class="lws-card">
            <a href={`/blog/${id}`}>
                <img src={image} class="lws-card-image" alt="" />
            </a>
            <div class="p-4">
                <div class="lws-card-header">
                    <p class="lws-publishedDate">{createdAt}</p>
                    <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <a href={`/blog/${id}`} class="lws-postTitle"> {title} </a>
                <div class="lws-tags">

                    {tags?.slice(0, 3).map((tag, i) =>
                        <span key={i}>#{tag},</span>
                    )}
                </div>
                <div class="flex gap-2 mt-4">
                    {isSaved && <span class="lws-badge"> Saved </span>}
                </div>
            </div>
        </div>
    );
};

export default PostItem;