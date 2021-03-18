//- These actions aren't being used yet, still need to decide when these will be dipatched
// probably when new data is fetched from stock api

export const updateIndexPrice = (obj) => {
    return {
        type: "indexPrice", 
        payload: obj
    };
};

export const updatePreviousPrice = (obj) => {
    return {
        type: "previousPrice", 
        payload: obj
    };
};

