import React from 'react';
import myClasses from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => (
<header className={myClasses.Toolbar}> 
    <DrawerToggle clicked = {props.drawerToggleClicked} />
    <div className={myClasses.Logo}>
        <Logo />
    </div>
    <nav className={myClasses.DesktopOnly}>
        <NavigationItems/>
    </nav>
</header>
);

export default toolbar;