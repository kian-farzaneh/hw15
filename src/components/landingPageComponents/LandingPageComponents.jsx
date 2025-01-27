import React from "react";
import Header from "../header/Header";
import Form from "../Form/Form";
import './landingPageComponents.css'

export default function LandingPageComponents() {
    return(
        <div className="landingContainer">
            <Header />,
            <Form />
        </div>
    )
};
