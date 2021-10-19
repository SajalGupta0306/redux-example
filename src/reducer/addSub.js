const initialState = 0;
const addOrSubtractNumber = (state = initialState, action) => {
    if(action.type === "Add"){
        return state + action.payload;
    }else if(action.type === "Subtract"){
        return state - action.payload;
    }else{
        return state;
    }
}

export default addOrSubtractNumber;