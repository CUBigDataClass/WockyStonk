//- These actions aren't being used yet, still need to decide when these will be dipatched
// probably when new data is fetched from stock api

export const updateDOWIndex = (obj) => {
    return {
        type: "updateDOWIndex", 
        payload: obj
    };
};

export const updateNASIndex = (obj) => {
    return {
        type: "updateNASIndex", 
        payload: obj
    };
};

export const updateSPIndex = (obj) => {
    return {
        type: "updateSPIndex", 
        payload: obj
    };
};
