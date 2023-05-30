const initialState = {
   items: [],
   count: 0,
 };
 
 const cartReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'ADD_TO_CART':
       return {
         ...state,
         items: [...state.items, action.payload],
         count: state.count + 1,
       };
     // Add more cases for other cart-related actions
     default:
       return state;
   }
 };
 
 export default cartReducer;
 