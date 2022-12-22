import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

export const fbLoginWithpopup = createAsyncThunk("popupLogin", async () => {
  const userPopup = await signInWithPopup(auth, provider);
  return userPopup;
});

export const fbLogin = createAsyncThunk(
  "users/firebaseLogin",
  async ({ email, password }) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    // console.log(user.user);
    //maybe use name ?
    return user.user.uid;
  }
);

export const fbSignup = createAsyncThunk(
  "users/firebaseSignUp",
  async ({ email, password }) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(user.user.uid);
    //maybe use name ?
    return user.user.uid;
  }
);
const notify = (text) =>
  toast.error(text, {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // theme: "dark",
  });

const initialState = {
  currentUser: null,
  loading: true,
  error: null,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    updateLoadin: (state, action) => { 
      state.loading = action.payload
    }
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(fbLogin.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fbLogin.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fbLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        // console.log("Handle this LOGIN error:", state.error.message);
        notify(state.error.message);
      });
    //SignUp
    builder.addCase(fbSignup.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fbSignup.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fbSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        // console.log("Handle this SIGNUP error:", state.error.message);
        notify(state.error.message);
      }),
      //signing popoup fbLoginWithpopup
      builder.addCase(fbLoginWithpopup.fulfilled, (state, action) => {
        // state.currentUser = action.payload;
        // state.loading = false;
        state.error = null;
      });
      builder.addCase(fbLoginWithpopup.pending, (state) => {
        state.loading = true;
      }),
        builder.addCase(fbLoginWithpopup.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
          // console.log("Handle this SIGNUP error:", state.error.message);
          notify(state.error.message);
        })

  },
});

export const { updateUser, updateLoadin } = LoginSlice.actions;
export const selectUser = (state) => state.login.currentUser;
export const selectLoading = (state) => state.login.loading;
export default LoginSlice.reducer;
