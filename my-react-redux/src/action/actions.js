import { INCREMENT, DECREMENT, FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR,CREATE_USER_REQUEST,CREATE_USER_SUCCESS,CREATE_USER_ERROR, DELETE_USER_SUCCESS } from './types';
import axios from 'axios';


export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};

// Action fecthAllUser
export const fecthAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest())
        try {
            const res = await axios.get("http://localhost:8080/users/all")
            const data = res && res.data ? res.data : []
            dispatch(fecthUserSuccess(data))
        } catch (error) {
            dispatch(fecthUserError())
        }
      
    }
  }

// Action status call api (Start  Finish error )

export const fetchUserRequest = () => {

    return {

       type: FETCH_USER_REQUEST,

    };

};
export const fecthUserSuccess = (data) => {

    return {

       type: FETCH_USER_SUCCESS,
       dataUsers: data

    };

};
export const fecthUserError = () => {

    return {

       type: FETCH_USER_ERROR,

    };
};

///////////// ACTION CREATE ///////////////

export const createUserRequest = () => {

    return {

       type: CREATE_USER_REQUEST,

    };

};
export const createhUserSuccess = () => {

    return {

       type: CREATE_USER_SUCCESS,

    };

};
export const createUserError = () => {

    return {

       type: CREATE_USER_ERROR,

    };
};

export const createNewUserRedux = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest())
        try {
           let res = await axios.post( "http://localhost:8080/users/create", {email, password, username})
           if(res && res.data.errCode === 0)
            dispatch(createhUserSuccess())
            dispatch(fecthAllUser())
        } catch (error) {
            dispatch(createUserError())
        }
    }
}
// DELETE USER BY ID
export const deleteUserRedux = (id) => {

    return async (dispatch, getState) => {
        try {
            let res = await axios.post(`http://localhost:8080/users/delete/${id}`)
            console.log(res)
            if(res && res.data.errCode === 0){
                console.log("test",res.data.errCode)
            dispatch(deleteUserSucces())
            dispatch(fecthAllUser())
             }
        } catch (error) {
            console.log(error)
        }

    }
};
export const deleteUserSucces = () => {
    return{
        type: DELETE_USER_SUCCESS
    }
}
    
    

