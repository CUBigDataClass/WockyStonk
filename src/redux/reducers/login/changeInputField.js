const emailReducer = (state = "", action) => {
    switch (action.type) {
      case "email":
        return action.payload;
      default:
        return state;
    }
};

const passwordReducer = (state = "", action) => {
  switch (action.type) {
    case "password":
      return action.payload
    default: 
      return state; 
  }
}
  
export {passwordReducer, emailReducer};
  