
export const handleClickAdd = (element, state) => {
    // TBD needs to be added in BBDD and do the api insert
    const newState = state;
    newState.push(element);
    return newState;
};

export const handleClickModify = (element, newElement, state) => {
    const index = state.indexOf(element);
    const newArray = [...state];
    newArray.splice(index, 1, newElement);
    alert(JSON.stringify(newArray)); // only for testing purpose
    return newArray;
};
export const handleClickRemove = (element, state) => {
    // TBD needs to be added in BBDD and do the api delete
    const index = state.indexOf(element);
    const newArray = [...state];
    newArray.splice(index, 1);
    alert(JSON.stringify(newArray)); // only for testing purpose
    return newArray;
};
