import { getblogs } from "./blogsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk(
    "blogs/fetchBogs",
    async () => {
        const blogs = await getblogs();
        return blogs;
    }
);

const blogSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.blogs = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default blogSlice.reducer;
