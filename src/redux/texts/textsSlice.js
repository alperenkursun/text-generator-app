import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTexts = createAsyncThunk(
  "texts/fetchTexts",
  async ({ paras, isHTML }) => {
    const response = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${
        isHTML === "yes" ? "html" : "text"
      }`
    );
    const data = await response.text();
    return data;
  }
);

const textsSlice = createSlice({
  name: "texts",
  initialState: {
    value: "",
    status: "idle",
    error: null,
    paras: 4,
    isHTML: "no",
  },
  reducers: {
    setParas: (state, action) => {
      state.paras = action.payload;
    },
    setIsHTML: (state, action) => {
      state.isHTML = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTexts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTexts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchTexts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setParas, setIsHTML } = textsSlice.actions;

export const textsSelector = (state) => state.texts.value;
export const textsStatusSelector = (state) => state.texts.status;
export const textsErrorSelector = (state) => state.texts.error;
export const textsParasSelector = (state) => state.texts.paras;
export const textsIsHTMLSelector = (state) => state.texts.isHTML;

export default textsSlice.reducer;
