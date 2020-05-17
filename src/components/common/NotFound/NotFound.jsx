import React, {useEffect} from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
    useEffect(() => {document.title = "404 not found"},[]);
    return (
        <div className="content">
            <div className="container">

                <div style={{textAlign: "center"}}>
                    <img style={{maxWidth: "100%"}} src="https://notionpress.com/new-rewamp/images/404-error.gif" alt="not found"/>
                    <h2>Not found</h2>
                </div>
            </div>
        </div>
    );
};

export default NotFound;