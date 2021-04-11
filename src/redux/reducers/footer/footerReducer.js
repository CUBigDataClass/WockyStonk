const fmp = require('financialmodelingprep')('c494c521ea2b5688b838372418d58fd2')
// DOW JONES INDUSTRIAL AVERAGE
fmp.market.index.quote("^DJI").then(response => console.log(response[0].price, "DJI"));
fmp.market.index.quote("^DJI").then(response => console.log(response[0].changesPercentage, "DJI"));
fmp.market.index.quote("^DJI").then(response => console.log(response[0].previousClose, "DJI"));

// S&P 500
fmp.market.index.quote("^GSPC").then(response => console.log(response[0].price, "S&P"));
fmp.market.index.quote("^GSPC").then(response => console.log(response[0].changesPercentage, "S&P"));
fmp.market.index.quote("^GSPC").then(response => console.log(response[0].previousClose, "S&P"));

// NASDAQ
fmp.market.index.quote("^IXIC").then(response => console.log(response[0].price, "NASDAQ"));
fmp.market.index.quote("^IXIC").then(response => console.log(response[0].changesPercentage, "NASDAQ"));
fmp.market.index.quote("^IXIC").then(response => console.log(response[0].previousClose, "NASDAQ"));

// DATA ON SPECIFIC INDEX
// fmp.market.index.quote("^DJI").then(response => console.log(response));

// const indexes = [
//     {
//         name: "DOW",
//         price: fmp.market.index.quote("^DJI").then(response => response[0].price),
//         change: fmp.market.index.quote("^DJI").then(response => response[0].changesPercentage)
//     }

// ];

// console.log(indexes[0]);


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