import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchAccounts = createAsyncThunk(
  "account/fetchAccounts",
  async ({name, accountId, pageSize, page } = {}, { rejectWithValue }) => {
    console.log("Fetching accounts with filters:", { name, accountId });

    try {
      const response = await api.get("/api/accounts", {
        params: {
          name,
          number:accountId,
          size:pageSize,
          page:page,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Beklenmeyen bir hata oluştu"
      );
    }
  }
);

const initialState = {
  pageSize: 10,
  page: 0,
  totalRecords: 0,
  accounts: [],
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = action.payload.content;
        state.pageSize = action.payload.size;
        state.totalRecords = action.payload.totalElements;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPageSize, setPage } = accountSlice.actions;

export default accountSlice.reducer;
