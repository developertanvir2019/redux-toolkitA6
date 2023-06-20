import React from 'react';

const DetailBlog = ({ blog }) => {
    return (
        <main class="post">
            <img src={blog?.image} alt="githum" class="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {blog?.title}
                </h1>
                <div class="tags" id="lws-singleTags">
                    {blog?.tags?.map((tag, i) =>
                        <span key={i}>#{tag},</span>
                    )}
                </div>
                <div class="btn-group">
                    <button class="like-btn" id="lws-singleLinks">
                        <i class="fa-regular fa-thumbs-up"></i> {blog?.likes}
                    </button>
                    <button class="active save-btn" id="lws-singleSavedBtn">
                        <i class="fa-regular fa-bookmark"></i> {blog?.isSaved ? 'Saved' : 'Save'}
                    </button>
                </div>
                <div class="mt-6">
                    <p>
                        {blog?.description}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default DetailBlog;