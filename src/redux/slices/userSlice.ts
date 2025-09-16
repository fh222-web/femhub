import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  token: string | null;
  refreshToken: string | null;
  user: any | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  token: null,
  refreshToken: null,
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        token?: string;
        refreshToken?: string;
        user: any;
      }>
    ) => {
      if (action.payload.token) {
        state.token = action.payload.token;
      }
      if (action.payload.refreshToken) {
        state.refreshToken = action.payload.refreshToken;
      }
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    logoutUser: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action: PayloadAction<any>) => {
      state.user = { ...state.user, ...action.payload };
      // Update onboardingCompleted if it's in the payload
    },
  },
});

export const { setUser, setToken, setRefreshToken, logoutUser, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
