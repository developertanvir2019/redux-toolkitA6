import React, { useEffect } from 'react';
import webp from '../images/git.webp'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../features/blogs/blogsSlice';
import Loading from './Loading';
import PostItem from './PostItem';
const Posts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const { blogs, isLoading, isError, error } = useSelector((state) => state?.posts);
    console.log(blogs);

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && blogs?.length === 0) {
        content = <div className="col-span-12">No blogs found!</div>;
    }

    if (!isError && !isLoading && blogs?.length > 0) {
        content = blogs.map((blog) => (
            <PostItem key={blog.id} blog={blog} />
        ));
    }

    return (
        <main class="post-container" id="lws-postContainer">

            {content}

        </main>
    );
};

export default Posts;