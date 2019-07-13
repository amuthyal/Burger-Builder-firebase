import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import myClasses from './Logo.module.css';
const logo = (props) => (
    <div className={myClasses.Logo} style = {{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);
export default logo;
