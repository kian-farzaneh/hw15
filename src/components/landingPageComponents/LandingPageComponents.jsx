import React from "react";
import Header from "../header/Header";
import Form from "../Form/Form";
import Offer from "../Offer/Offer";
import SocialProof from "../SocialProof/SocialProof";
import './landingPageComponents.css'

export default function LandingPageComponents() {
    return (
        <div className="landingContainer">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Form />
                <Offer />
            </div>
            <div className="socialProof">
                <SocialProof />
            </div>
        </div>
    )
};
