const updateEmailTextField = (textInput) => {
    return {
        type: "email", 
        payload: textInput
    };
};

const updatePasswordTextField = (textInput) => {
    return {
        type: "password", 
        payload: textInput
    };
};

export default updateEmailTextField;
export {updatePasswordTextField}; 
  
