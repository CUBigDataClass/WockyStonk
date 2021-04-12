const initialState = [
    {
        name: "DOW",
        index: 0, 
        previousClose: 0, 
        change: 0
    },
    {
        name: "NASDAQ",
        index: 0, 
        previousClose: 0, 
        change: 0
    },
    {
        name: "S&P500",
        index: 0, 
        previousClose: 0, 
        change: 0
    }
];

//- just see if this gets put in the store first
//- you can probably collapse this all into one? how would you set the initial states 
const dowReducer = (state=initialState[0], action) => {
    switch(action.type) {
        case "updateDOWIndex":
            return action.payload; 
        default:
            return state 
    }
}

const nasdaqReducer = (state=initialState[1], action) => {
    switch(action.type) {
        case "updateNASIndex":
            return action.payload; 
        default: 
            return state 
    }
}
 
const spReducer = (state=initialState[2], action) => {
    switch(action.type) {
        case "updateSPIndex":
            return action.payload; 
        default: 
            return state 
    }
}
export default nasdaqReducer; 
export { dowReducer, spReducer }