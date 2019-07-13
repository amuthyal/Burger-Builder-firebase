import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import myClasses from './Layout.module.css';
const layout = (props) => (
    <Auxiliary> 
        <Toolbar/>
        <div> Toolbar,SideDrawer, Backdrop </div>
        <main className={myClasses.Content}>
            {props.children}
        </main>
    </Auxiliary>
    
);

export default layout;