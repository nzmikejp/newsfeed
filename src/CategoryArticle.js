import React, { Component} from 'react'

class CategoryArticle extends Component {
   

    render(){
        return (
            <div className="category-article" key={this.props.id}>
                <div className="article-content">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <a href={this.props.url} className="btn btn-more" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
                <div className="article-image">
                    <img src={this.props.image} alt="" />
                </div>
            </div>
        )
    }
}

export default CategoryArticle;