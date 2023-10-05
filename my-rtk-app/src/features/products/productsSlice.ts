import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState: any = {
  isLoading: false,
  isError: false,
  productList: [],
  cartItems: [],
  status: "idle",
}

// fetching products array from rest api
export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response)
    return response.data // we are returning the payload
  },
)

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // the functions added here will be available for export from actions
    addToCart: (state, action) => {
      console.log(state) // entire store data rel to this feature
      console.log(action)
      state.cartItems = [
        ...state.cartItems, 
        action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.productList = action.payload
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.status = "Unable to load products. Try again later."
      })
  },
})

export const { addToCart } = productsSlice.actions
export default productsSlice.reducer
