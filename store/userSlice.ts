import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData } from "@/apis/user";
import { UserState } from "@/types";

interface InitialState {
  data: UserState | null;
  status: "loading" | "success" | "error";
  error: string | null;
}

const initialState: InitialState = {
  data: null,
  status: "success",
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetchUserData();
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message as string;
      });
  },
});

export const userReducer = userSlice.reducer;
