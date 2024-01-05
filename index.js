// const {createStore} = require("redux")


// const increment = "INCREMENT"; 
// const Decrement = "DECREMENT"; 
// const ADD_USER = "ADD_USER";



// // state 
// const initialCounterState = {
//     count: 0,   
// }

// const initialUsersState = {
//     users: [{users: 'reza'}]   
// }

// /// create reducer for Counter 

// const counterReducer = (state = initialCounterState, action) => {

//     switch (action.type) {
//         case increment:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
            
//         case Decrement:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//     }
// }



// /// action 
// //// incremet Counter 
// const IncrementCounter = () => {
//     return {
//         type: increment, 
//     }
// }

// const DecrementCounter = () => {
//     return {
//         type: Decrement, 
//     }
// }

// const addUser = () => {
//     return {
//         type: ADD_USER, 
//         payload: {name: "rakib"} 
//     }
// }

// const store =  createStore(store)

// store.subscribe(()=> {
//     console.log(store.getState())
// })

// store.dispatch(IncrementCounter())

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"

const initialProductState = {
    prodects: ["sugar", "salt"], 
    numberOfProducts: 2
}