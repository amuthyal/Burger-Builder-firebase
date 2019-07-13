import React from 'react';
import myClasses from './Toolbar.module.css'
const toolbar = (props) => (
<header className={myClasses.Toolbar}> 
    <div>MENU </div>
    <div> LOGO </div>
    <nav>
        ...
    </nav>
</header>
);

export default toolbar;