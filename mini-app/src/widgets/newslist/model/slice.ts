import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk(
  "stories/fetchNewStories",
  async function () {
    try {
      const response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty?_limit=100"
      );
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    storiesIds: [],
    status: null,
    error: null,
  },
  reducers: {
    onNavigateNext(state) {
      state.currentPage++;
    },
    onNavigatePrev(state) {
      state.currentPage--;
    },
    onChangeTablePerpage(state, action) {
      state.tablePerPage = action.payload;
    },
    onClickCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    increment(state) {
      state.tablePerPage++;
    },
    decrement(state) {
      state.tablePerPage--;
    },
  },
  extraReducers: {
    [fetchNewStories.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchNewStories.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.storiesIds = action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const {
  onNavigateNext,
  onNavigatePrev,
  onChangeTablePerpage,
  onClickCurrentPage,
  increment,
  decrement,
  onSignIn,
} = toolkitSlice.actions;
