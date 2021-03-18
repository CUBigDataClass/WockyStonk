import { text } from "body-parser";

export const updateEmailTextField = (textInput) => {
    return {
        type: "email", 
        payload: textInput
    };
};
  
export const updatePasswordTextField = (textInput) => {
    return {
        type: "password", 
        payload: textInput
    };
};
  
