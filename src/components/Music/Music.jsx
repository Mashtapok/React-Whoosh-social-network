import s from "./Music.module.css";
import React, {useEffect} from 'react';
import putinSong from "../../assets/favourite.mp3"


const Music = (props) => {
    useEffect(() => {document.title = "Музыка"},[]);
    return (
        <div className="content">
            <div className="container">
                <p style={{padding: "0 5px 5px 5px",
                    fontSize: "16pt"}}>Любимые песни</p>
                <audio controls src={putinSong}/>
            </div>
        </div>
    );
};
export default Music;