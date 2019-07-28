import React from 'react';
import myClasses from './Input.module.css';
const input = (props) => {
    let inputElement = null;
    const inputClasses = [myClasses.InputElement];


    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(myClasses.Invalid);
    }

    switch(props.elementType){
        case('input'): 
        inputElement = 
        <input  className={inputClasses.join(' ')} 
         {...props.elementConfig} 
         value = {props.value} onChange = {props.changed}/>;
        break;
        case('textarea'):
        inputElement = 
        <textarea  className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value = {props.value} onChange = {props.changed}/>;
        // eslint-disable-next-line no-fallthrough
        case('select'):
        inputElement = (
        <select  
            className={inputClasses.join(' ')} 
            value = {props.value}
            onChange = {props.changed}>
            {props.elementConfig.options.map(option => (
                <option key= {option.value} value= {option.value}> {option.displayValue} </option>
            ))} 
            </select>
        );
        break;
        default:
            inputElement = 
            <input className={inputClasses.join(' ')}
             {...props.elementConfig} 
             value = {props.value} onChange = {props.changed}/>;
    }

   return ( 
   <div className = {myClasses.Input}>
        <label className = {myClasses.Label}>{props.label}</label>
        {inputElement}
    </div>
   );
};

export default input;