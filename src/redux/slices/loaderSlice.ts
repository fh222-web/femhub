import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoaderState {
  isLoading: boolean;
  message: string;
}

const initialState: LoaderState = {
  isLoading: false,
  message: 'Please wait...',
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = true;
      state.message = action.payload || 'Please wait...';
    },
    hideLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
