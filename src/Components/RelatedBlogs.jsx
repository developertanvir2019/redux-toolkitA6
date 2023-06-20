import React, { useEffect } from 'react';
import { fetchRelatedBlogs } from '../features/relatedBlogs/relatedBlogSlice';
import { useDispatch, useSelector } from 'react-redux';

const RelatedBlogs = ({ blog }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRelatedBlogs({ tags: blog?.tags, id: blog?.id }))
    }, [blog?.tags, blog?.id, dispatch])
    const relatedBlog = useSelector(state => state?.relatedBlogs?.relatedBlogs)
    return (
        <div class="space-y-4 related-post-container">
            {
                relatedBlog?.map(blog =>
                    <div key={blog?.id} class="card">
                        <a href={`/blog/${blog?.id}`}>
                            <img src={blog?.image} class="card-image" alt="" />
                        </a>
                        <div class="p-4">
                            <a href={`/blog/${blog?.id}`} class="text-lg post-title lws-RelatedPostTitle">
                                {blog?.description?.slice(0, 100)}
                            </a>
                            <div class="mb-0 tags">
                                {
                                    blog?.tags?.map(tag =>
                                        <span key={blog?.id}>#{tag},</span>
                                    )
                                }
                            </div>
                            <p>{blog?.createdAt}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default RelatedBlogs;