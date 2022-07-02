import { USER_TYPE } from "../actions/types";

const initialState = {
    joke: []
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_TYPE: 
        return{
            ...state,   
            joke: payload
        }
        default:
            return state;
    }
}