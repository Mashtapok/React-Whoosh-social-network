import preloader from "../../../assets/images/preloader.svg";
import React from "react";

const InitialiePreloader = () => {
    return (
        <img src={preloader} style={ {position: "relative", display: "block", margin: "0 auto" }}/>
    );
};
export default InitialiePreloader;