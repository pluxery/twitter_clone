import React from 'react';
import Sidebar from "../Sidebar/Sidebar";

import Actual from "../Actual/Actual";
import './Layout.css'
import '../App.css';

function Layout({children, active}) {
    return (
        <div className="app">
            <Sidebar/>
            <main className={"layout"}>{children}</main>
            <Actual trendsOn={active}/>
        </div>

    )
}

export default Layout;