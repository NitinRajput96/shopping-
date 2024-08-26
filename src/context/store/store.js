import { configureStore } from "@reduxjs/toolkit"
import cartSlice from './slice/slice'

export const store=configureStore({
     reducer:{
          cart:cartSlice
     }
})