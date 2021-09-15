import * as actionTypes from './constants';

export const highlightedTextChanged = (value) => {
    return {
        type: actionTypes.HIGHLIGHTED_TEXT_CHANGED,
        value
    };
};

export const addTextSuccess = (value) => {
    return {
        type: actionTypes.ADD_TEXT_SUCCESS,
        value
    };
};