import React, { useEffect } from 'react';
import DetailBlog from '../Components/DetailBlog';
import RelatedBlogs from '../Components/RelatedBlogs';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlog } from '../features/blog/blogSlice';

const Blog = () => {
    const dispatch = useDispatch();
    const { blogId } = useParams();

    useEffect(() => {
        dispatch(fetchBlog(blogId))
    }, [dispatch, blogId])

    const { blog } = useSelector((state) => state?.post)
    return (
        <body>
            <div class="container mt-8">
                <a href="/" class="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    class="mr-2 fa-solid fa-house"></i>Go Home</a>
            </div>
            <section class="post-page-container">
                <DetailBlog blog={blog} />
                <aside>
                    <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
                    <RelatedBlogs blog={blog} />
                </aside>
            </section>
        </body>
    );
};

export default Blog;