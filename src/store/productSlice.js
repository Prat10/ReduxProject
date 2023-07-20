import {createSlice} from '@reduxjs/toolkit';
const initialState={
    data:[],
}
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
       fetchProduct(state,action){
          state.data=action.payload;
       }
    }
});
export const {fetchProduct} = productSlice.actions;
export default productSlice.reducer;
export function getProduct(){
    return async function getproductsThunk(dispatch,getState){
        const data=await fetch('https://fakestoreapi.com/products')
        const result=await data.json()
        console.log(result)
        dispatch(fetchProduct(result));
    }
}