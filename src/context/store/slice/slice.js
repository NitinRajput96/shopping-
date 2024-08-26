import { createSlice } from "@reduxjs/toolkit";

const initialState={
     cartItems:[],
     cartTotalQty:0,
     cartPrice:0
}

const cartSlice=createSlice({
      name:"cart",
      initialState,
      reducers:{
               
            addToCart(state,action){
                  const itemIndex=state.cartItems.findIndex( 
                        (item)=> item.id===action.payload.id
                    )
        
                    if(itemIndex>=0){
                        state.cartItems[itemIndex].cartTotalQty +=1
                    }
                    else
                    {
                        let tempProductItem={...action.payload, cartTotalQty:1}
                        state.cartItems.push(tempProductItem)
                    }
                    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
                   
            } ,

            decreaseCardItem(state,action){
                  const itemIndex=state.cartItems.findIndex(
                      (item)=> item.id===action.payload.id
    
                  ); if(state.cartItems[itemIndex].cartTotalQty>1){
                    state.cartItems[itemIndex].cartTotalQty-=1
                   }else if(state.cartItems[itemIndex].cartTotalQty===1){
                    const  newcartItem=state.cartItems.filter((item)=>item.id!==action.payload.id)
    
                      state.cartItems=newcartItem;
                   }
                   localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
              },
              
              clearCartItems(state,action){
                  state.cartItems=[]
                  localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
             },
  
            removeSingleCart(state,action){
                const newCart=state.cartItems.filter((item)=> item.id!==action.payload.id)
                state.cartItems=newCart
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
            },
  
            getTotals(state,action){
                           let {total,quantity}= state.cartItems.reducer((cartTotal,cartItem)=>{
                           const {price,cartqQuantity}=cartItem;
                           const itemTotal=price*cartqQuantity;
  
                           cartTotal.total+=itemTotal;
                           cartTotal.quantity +=cartqQuantity
                           return cartTotal
                  },{
                         total:0,
                         quantity:0,
                  });
  
                  state.cartTotalQty=quantity;
                  state.cartPrice=total
            }
      }  
})

export const {addToCart,decreaseCardItem,clearCartItems,removeSingleCart,getTotals} = cartSlice.actions;
export default cartSlice.reducer;