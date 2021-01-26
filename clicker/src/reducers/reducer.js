import * as actionType from '../actions/actions';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.INCREMENT: 
        return {
            ...state, 
            counter: state.counter +1,
        };
        case actionType.DECREASE: 
        return {
            ...state,
            counter: state.counter -1,
        };
        case actionType.RESET: 
        return {
            ...state,
            counter: 0
        }; 
    }

    return state;
};

const initialState = {
    counter: 0
}

export default reducer;