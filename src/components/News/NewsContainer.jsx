import React from "react";
import News from "./News";
import {connect} from "react-redux";
import {requestArticles} from "../../Redux/news-reducer";

class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.requestArticles();
    }

    render() {
        return (
            <News articles={this.props.articles}/>
        );
    }
}

const mapStateToProps = (state) => ({
    articles: state.news.articles
});
export default connect(mapStateToProps, {requestArticles})(NewsContainer);