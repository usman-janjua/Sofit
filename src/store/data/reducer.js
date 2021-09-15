import * as actionTypes from './constants';
import { updateObject } from '../../shared/utility';

const initialState = {
    markDownText: "",
    highlightedText: "",
}

const highlightedTextChanged = (state, action) => {
    return updateObject(state, {
        highlightedText: action.value
    });
}

const addTextSuccess = (state, action) => {
    return updateObject(state, {
        markDownText: action.value
    });
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TEXT_SUCCESS: return addTextSuccess(state, action)
        case actionTypes.HIGHLIGHTED_TEXT_CHANGED: return highlightedTextChanged(state, action)
        default:
            return state;
    }
}

export default reducer;