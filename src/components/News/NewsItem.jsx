import s from "./News.module.css";
import React from 'react';

const News = ({article}) => {
    let publishedTime = new Date(article.publishedAt);
    let time = publishedTime.toLocaleTimeString("ru", {hour: 'numeric', minute: 'numeric', second: 'numeric'});
    let date = publishedTime.toLocaleDateString("ru", {year: 'numeric', month: 'long', day: 'numeric'});

    return (
        <div className={s.card}>
            <a href={article.url} target="_blank">
                <div className={s.title}>{article.title}</div>
                <div className={s.poster}>
                    <div className={s.wrapper}>
                        <img src={article.urlToImage} className={s.image}/>
                        <div className={s.black}><div>Перейти на источник {article.source.name}</div></div>
                    </div>
                    <p className={s.content}>{article.description}</p>
                </div>
            </a>

            <div className={s.info}>
                <p style={{fontSize: "12px"}}>{time}</p>
                <p style={{fontSize: "12px"}}>{date}</p>
            </div>
        </div>
    );
};
export default News;