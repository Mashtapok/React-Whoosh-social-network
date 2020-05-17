import s from "./News.module.css";
import React, {useEffect} from 'react';
import NewsItem from "./NewsItem";

const News = ({articles}) => {
    useEffect(() => {document.title = "Новости"},[]);
    return (
        <div className="content">
            <div className="container">
                <p style={{padding: "0 5px 5px 5px",
                    fontSize: "16pt"}}>Последние новости</p>
                <div className={s.body}>
                    {articles.map(article => <NewsItem article={article}/>)}
                </div>
            </div>
        </div>
    );
};
export default News;