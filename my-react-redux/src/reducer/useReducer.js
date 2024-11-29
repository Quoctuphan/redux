import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, CREATE_USER_SUCCESS, CREATE_USER_ERROR,CREATE_USER_REQUEST, DELETE_USER_SUCCESS } from '../action/types';


const INITIAL_STATE = {
    listUsers: [],
    isLoading: false,
    isError: false,
    isCreate: false
};
//  reducer( State equal to Data in store, action )
const useReducer = (state = INITIAL_STATE, action) => {
   

    switch (action.type) {

        case FETCH_USER_REQUEST:
            console.log("FETCH_USER_REQUEST", action)
           return {

             ...state,
             isLoading: true,
             isError: false,
           };

        case FETCH_USER_SUCCESS:
            console.log("FETCH_USER_SUCCESS",action)
            console.log('state', state)
           return {
              ...state, listUsers: action.dataUsers,
              isLoading: false,
              isError: false,
           };
           
        case FETCH_USER_ERROR:
            console.log("FETCH_USER_ERROR", action)
           return {
              ...state, 
              isLoading: false,
              isError: true,
           };
        
        case CREATE_USER_REQUEST: 
        return {...state, isCreate: true }

        case CREATE_USER_SUCCESS: 
        return {...state, isCreate: false }

        case CREATE_USER_ERROR: 
        return {...state, isCreate: false }

         default: return state;

    }

};

export default useReducer;