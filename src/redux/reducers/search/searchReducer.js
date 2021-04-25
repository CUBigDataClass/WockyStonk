
const initialState = "";

const searchReducer = (state=initialState, action) =>{
    switch(action.type){
        case "searchInput":
            const search = action.payload;
            return search
        default:
            return state
    }
}

export default searchReducer;