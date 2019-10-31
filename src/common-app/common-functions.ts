import * as React from 'react';

export const handleClickAdd = (element, state) => {
    // TBD needs to be added in BBDD and do the api insert
    const newState = state;
    newState.push(element);
    return newState;
};

export const handleClickModify = (element, newElement, state) => {
    const index = state.indexOf(element);
    state.splice(index, 1, newElement);
    alert(JSON.stringify(state)); // only for testing purpose
    return state;
};
export const handleClickRemove = (element, state) => {
    // TBD needs to be added in BBDD and do the api delete
    const index = state.indexOf(element);
    state.splice(index, 1);
    alert(JSON.stringify(state)); // only for testing purpose
    return state;
};
