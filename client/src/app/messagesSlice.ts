import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosApi from "../../axiosApi";
import { type Message } from "../../types.js";

interface MessagesState {
  messages: Message[];
  loading: boolean;
}

const initialState: MessagesState = {
  messages: [],
  loading: false,
};

export const fetchMessages = createAsyncThunk("messages/fetchAll", async () => {
  const response = await axiosApi.get<Record<string, Message>>("/messages");
  const data = response.data;

  if (!data) {
    return [];
  }

  const result = Object.keys(data).map((id) => {
    return {
      id,
      ...data[id],
    };
  });

  console.log("result", result);
  return result;
});

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMessages.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const messagesReducer = messageSlice.reducer;
export const {} = messageSlice.actions;
