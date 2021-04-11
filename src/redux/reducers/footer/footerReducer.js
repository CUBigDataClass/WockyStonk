const initialState = [
    {
        name: "DOW",
        index: 32297.02,
        change: 3.0
    },
    {
        name: "NASDAQ",
        index: 13068.83,
        change: -0.04
    },
    {
        name: "S&P500",
        index: 3898.81,
        change: 0.6
    }
];

//- just see if this gets put in the store first
//- you can probably collapse this all into one? how would you set the initial states 
const dowReducer = (state=initialState[0], action) => {
    switch(action.type) {
        case "updateIndex":
            console.log('came here');
            return state
        default:
            return state 
    }
}
const nasdaqReducer = (state=initialState[1], action) => {
    switch(action.type) {
        case "updateIndex":
            return state
        default: 
            return state 
    }
}
 
const spReducer = (state=initialState[2], action) => {
    switch(action.type) {
        case "updateIndex":
            return state
        default: 
            return state 
    }
}

export default nasdaqReducer; 
export { dowReducer, spReducer }