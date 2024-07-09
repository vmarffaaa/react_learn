import React from 'react';
import MenuComponent from "../component/MenuComponent/MenuComponent";
import {Outlet} from "react-router-dom";
import styles from '../component/MenuComponent/MenuComponent.module.css'

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;