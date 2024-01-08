// const {createStore} = require("redux")

const { createStore } = require("redux")


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

// const GET_PRODUCTS = "GET_PRODUCTS"
// const ADD_PRODUCTS = "ADD_PRODUCTS"

// const initialProductState = {
//     prodects: ["sugar", "salt"], 
//     numberOfProducts: 2
// }



const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TOTDOS_FAILED"

//// https://jsonplaceholder.typicode.com/todos


/// state 
const initialTodosState = {
    todos: [], 
    isloading: false, 
    error: null
}


/// action 
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED, 
        payload: error
}
}

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS, 
        payload: todos
}
}


// reducers 

const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state, 
                isLoading: true, 
            }

        case GET_TODOS_SUCCESS:
            return{
                ...state, 
                isLoading: false, 
                todos: action.payload 
            }

        case GET_TODOS_FAILED:
            return{
                ...state, 
                isLoading: false, 
                error: action.payload
            }
        default:
           return state;
    }
}

/// aysen Action   
 const fetchData = () => {

 }


//store 

const store = createStore(todosReducer); 
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())
