import preloader from "../../../assets/images/preloader.svg";
import React from "react";

const Preloader = () => {
    return (
        <img src={preloader} style={ {position: "absolute", left: "45%", top: "10%" }}/>
    );
};
export default Preloader;