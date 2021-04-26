import React from 'react';
import { useSelector, useDispatch } from "react-redux";

function TestComponent(props){
    const dispatch = useDispatch();
    const search = useSelector((state) => state.dowIndex)
    console.log(search)
    return(
        <p>{search}</p>
    )
}


export default TestComponent;