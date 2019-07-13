import React from 'react';
import myClasses from './DrawerToggle.module.css'
const drawerToggle = (props) => (
    <div className={myClasses.DrawerToggle} onClick = {props.clicked}>
     <div></div> 
     <div></div> 
     <div></div> 
    </div>  
);

export default drawerToggle;