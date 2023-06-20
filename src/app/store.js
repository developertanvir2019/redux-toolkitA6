import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from '../features/blogs/blogsSlice';
import blogSlice from '../features/blog/blogSlice';
import relatedBlogSlice from '../features/relatedBlogs/relatedBlogSlice';

export const store = configureStore({
  reducer: {
    posts: blogsSlice,
    post: blogSlice,
    relatedBlogs: relatedBlogSlice,
  },
});


// new