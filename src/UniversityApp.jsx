import React from "react";
import { useState } from "react";
import HeaderComponent from "./University Management Dashboard/header_component.jsx";
import SidebarComponent from "./University Management Dashboard/sidebar_component.jsx";
import ParentComponent from "./University Management Dashboard/parent_component.jsx";
import FooterComponent from "./University Management Dashboard/footer_component.jsx";
import "./universityApp.css";
function UniversityApp(){
    return(
        <div id="main-container">
            <HeaderComponent/>
            <SidebarComponent/>
            <ParentComponent/>
            <FooterComponent/>
        </div>
    );
}
export default UniversityApp;