import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    //  cartItems:[],
     cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
     cartTotalQty:localStorage.getItem("cartTotalQty")?JSON.parse(localStorage.getItem("cartTotalQty")):0,
     cartPrice:localStorage.getItem("cartPrice")?JSON.parse(localStorage.getItem("cartPrice")):0
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {

            const findex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(findex >= 0) {
                state.cartTotalQty += 1;
                state.cartItems[findex].prodQyt += 1;
                state.cartPrice += parseInt(action.payload.Price);
            } 
            else {

                state.cartTotalQty += 1;
                const proItems = { ...action.payload, prodQyt: 1 }
                state.cartItems.push(proItems);
                state.cartPrice += parseInt(action.payload.Price);
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
            localStorage.setItem("cartTotalQty",JSON.stringify(state.cartTotalQty))
            localStorage.setItem("cartPrice",JSON.stringify(state.cartPrice))
          },

          decreaseCardItem(state,action){

            const indexOfProd = state.cartItems.findIndex((item) => item.id === action.payload.id );
            if(indexOfProd >= 0 ) {
                if(state.cartItems[indexOfProd].prodQyt > 1 ) {
                    state.cartItems[indexOfProd].prodQyt -= 1;
                    state.cartTotalQty -= 1;
                    state.cartPrice -= parseInt(action.payload.Price);
                }

                else {
                    state.cartTotalQty -= 1;
                    state.cartItems.splice(indexOfProd, 1);
                    state.cartPrice -= parseInt(action.payload.Price);

                }
            }
               localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
               localStorage.setItem("cartTotalQty",JSON.stringify(state.cartTotalQty))
               localStorage.setItem("cartPrice",JSON.stringify(state.cartPrice))

          },

          clearCartItems(state,action){
                state.cartItems=[]
                state.cartPrice=0
                state.cartTotalQty=0
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
                localStorage.setItem("cartTotalQty",JSON.stringify(state.cartTotalQty))
                localStorage.setItem("cartPrice",JSON.stringify(state.cartPrice))
          },
          

        //   removeSingleCart(state,action){
        //         const findex = state.cartItems.findIndex((item) => item.id === action.payload.id);

        //         if(findex >= 0) {
        //             state.cartTotalQty -= state.cartItems[findex].prodQyt
        //             state.cartItems.splice(findex, 1);

        //             state.cartPrice -= (action.payload.Price * action.payload.prodQyt);
        //         } 


              
        //       localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        //       localStorage.setItem("cartTotalQty",JSON.stringify(state.cartTotalQty))
        //       localStorage.setItem("cartPrice",JSON.stringify(state.cartPrice))
        //   }

        //   getTotals(state,action){
        //                  let {total,quantity}= state.cartItems.reducer((cartTotal,cartItem)=>{
        //                  const {Price,cartqQuantity}=cartItem;
        //                  const itemTotal=Price*cartqQuantity;

        //                  cartTotal.total+=itemTotal;
        //                  cartTotal.quantity +=cartqQuantity
        //                  return cartTotal
        //         },{
        //                total:0,
        //                quantity:0,
        //         });

        //         state.cartTotalQty=quantity;
        //         state.cartPrice=total
        //   }
    }
})

export const {addToCart,decreaseCardItem,clearCartItems}=cartSlice.actions
export default cartSlice.reducer;