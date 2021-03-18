const num = (state = "hello", action) => {
    switch (action.type) {
      case "WORLD":
        return state + " WORLD";
      default:
        return state;
    }
  };
  
  export default num;
  