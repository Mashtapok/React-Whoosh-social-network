import React from 'react';
import galleryStyle from './Gallery.module.css';

export const Gallery = (props) => {
    return (<div className={galleryStyle.wrapper}>
        <div className={galleryStyle.contentWrapper}>
            <div className={galleryStyle.content}>
                <div className={galleryStyle.header} >
                    <p onClick={() => props.setShowGallery(false)}><i className="fas fa-window-close"/> Закрыть</p>

                    {props.isOwner && <div>
                        <label  htmlFor="avatar" className={galleryStyle.header}>
                            <p>Обновить</p><i className="fas fa-cloud-upload-alt"/>
                            <input type="file" id="avatar" onInput={props.uploadPhoto} style={{display: "none"}}/>
                        </label>
                    </div>}
                </div>
                <img src={props.img} alt="gallery"/>
            </div>
        </div>
    </div>)
};
