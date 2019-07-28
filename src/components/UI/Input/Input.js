import React from 'react';
import myClasses from './Input.module.css';
const input = (props) => {
    let inputElement = null;

    switch(props.elementType){
        case('input'): 
        inputElement = 
        <input  className={myClasses.InputElement} 
         {...props.elementConfig} 
         value = {props.value}/>;
        break;
        case('textarea'):
        inputElement = 
        <textarea  className={myClasses.InputElement} 
        {...props.elementConfig} 
        value = {props.value}/>;
        // eslint-disable-next-line no-fallthrough
        case('select'):
        inputElement = (
        <select  
            className={myClasses.InputElement} 
            value = {props.value}>
            {props.elementConfig.options.map(option => (
                <option key= {option.value} value= {option.value}> {option.displayValue} </option>
            ))}
            </select>
        );
        break;
        default:
            inputElement = 
            <input className={myClasses.InputElement}
             {...props.elementConfig} 
             value = {props.value}/>;
    }

   return ( 
   <div className = {myClasses.Input}>
        <label className = {myClasses.Label}>{props.label}</label>
        {inputElement}
    </div>
   );
};

export default input;