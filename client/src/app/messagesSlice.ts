import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosApi from "../../axiosApi";
import { type Message } from "../../types.js";

interface MessagesState {
  msgs: Message[];
  loading: boolean;
}

const initialState: MessagesState = {
  msgs: [],
  loading: false,
};

// export const fetchContact = createAsyncThunk("contacts/fetchAll", async () => {
//   const response = await axiosApi.get<Record<string, Contact>>(
//     "/contacts.json"
//   );
//   const data = response.data;

//   if (!data) {
//     return [];
//   }

//   const result = Object.keys(data).map((id) => {
//     return {
//       id,
//       ...data[id],
//     };
//   });

//   return result;
// });

// export const deleteContact = createAsyncThunk(
//   "contact/deleteContact",
//   async (id: string) => {
//     await axiosApi.delete(`/contacts/${id}.json`);
//     return id;
//   }
// );

// export const addContact = createAsyncThunk(
//   "contact/addContact",
//   async (contact: Omit<Contact, "id">) => {
//     await axiosApi.post(`/contacts.json`, contact);
//     return contact;
//   }
// );

// export const editContact = createAsyncThunk(
//   "contact/editContact",
//   async (contact: Contact) => {
//     const { id, ...contactData } = contact;

//     await axiosApi.put(`/contacts/${id}.json`, contactData);

//     return contact;
//   }
// );

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const messagesReducer = messageSlice.reducer;
export const {} = messageSlice.actions;
