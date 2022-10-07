import React from "react";
import "./homeCta.scss";
import ctaIcon from "./ctaIcon";
import CtaButton from "./ctaIcon";

const HomeCta = () => {
    return (
        <div className="homeCtaContainer">
            <div className="homeCta">
                <h3>Are you hungry?</h3>
                <CtaButton />
            </div>
        </div>
    );
};

export default HomeCta;
