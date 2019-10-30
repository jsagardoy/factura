import * as React from 'react';

export const handleClickAdd = (element, state) => {
    //TBD needs to be added in BBDD and do the api insert
    let newState = state;
    newState.push(element);
    alert(JSON.stringify(newState)); //only for testing purpose
    return newState;
};

