import { Map } from 'immutable';

const setState = (state, newState) => {
    return state.merge(newState);
}

const reducer = (state = Map(), action) => {
    // eslint-disable-next-line
    switch(action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
    }
    return state;
}

export default reducer;