import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export const fbToggle = createAsyncThunk("toggle", async (props) => {
  const toggleRef = doc(db, props.currentUser, props.index);
  await updateDoc(toggleRef, {
    checked: !props.completed,
  });
});

export const fbDellTodo = createAsyncThunk("dellTodo", async (props) => {
  await deleteDoc(doc(db, props.currentUser, props.index));
});

export const fbAddTodo = createAsyncThunk("addTodo", async (props) => {
  const docref = await addDoc(collection(db, props.currentUser), {
    text: props.value,
    checked: false,
  });
  return [docref.id, props.value];
});

const initialState = {
  value: [],
  loading: false,
  error: null,
};

const AsyncTodoSlice = createSlice({
  name: "asynctodo",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    //addTodo
    builder.addCase(fbAddTodo.fulfilled, (state, action) => {
      // console.log("added Todo:", action.payload);
      // state.todosValue = action.payload;
      // state.loading = false;
      // state.error = null;
    });
    builder.addCase(fbAddTodo.pending, (state, action) => {
      // state.pending = true;
      //   console.log("panding Todo:", action.payload);
    }),
      builder.addCase(fbAddTodo.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.error;
        console.log("Handle this ADD TODO error:", state.error.message);
      }),
      //delTodo
      builder.addCase(fbDellTodo.fulfilled, (state, action) => {
        // console.log("dell Todo:", action.payload);
        // state.todosValue = action.payload;
        // state.loading = false;
        // state.error = null;
      });
    builder.addCase(fbDellTodo.pending, (state, action) => {
      // state.pending = true;
      //   console.log("panding Todo:", action.payload);
    }),
      builder.addCase(fbDellTodo.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.error;
        console.log("Handle this DEL TODO error:", state.error.message);
      }),
      //toggle
      builder.addCase(fbToggle.fulfilled, (state, action) => {
        // console.log("toggle Todo:", action.payload);
        // state.todosValue = action.payload;
        // state.loading = false;
        // state.error = null;
      });
    builder.addCase(fbToggle.pending, (state, action) => {
      // state.pending = true;
      //   console.log("panding Todo:", action.payload);
    }),
      builder.addCase(fbToggle.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.error;
        console.log("Handle this TOGGLE error:", state.error.message);
      });
  },
});

export const { updateValue } = AsyncTodoSlice.actions;
export const selectAsyncTodo = (state) => state.asynctodo.value;
export default AsyncTodoSlice.reducer;
