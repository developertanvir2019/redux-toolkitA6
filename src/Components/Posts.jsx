import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../features/blogs/blogsSlice';
import Loading from './Loading';
import PostItem from './PostItem';
const Posts = ({ filter, selectOption }) => {
    console.log(selectOption);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const { blogs, isLoading, isError, error } = useSelector((state) => state?.posts);

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && blogs?.length === 0) {
        content = <div className="col-span-12">No blogs found!</div>;
    }

    if (!isError && !isLoading && blogs?.length > 0) {
        content = blogs.filter(blog => {
            switch (filter) {
                case "All":
                    return blog;
                case "Saved":
                    return blog?.isSaved;
                default:
                    return true;
            }
        })
            .sort((a, b) => {
                if (selectOption === 'most_liked') {
                    return b.likes - a.likes; // Sort blogs in descending order based on likes
                }
                return 0; // No sorting required for other selectOption values
            })
            .map((blog) => (
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