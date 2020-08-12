import React, { Component } from 'react'
import fallbackImage from './assets/images/fallback-image.svg'

class FeatureArticle extends Component {


    render(){
        return (
            <div className="feature-article" key={this.props.id}>
                <div className="feature-image">
                    <img src={this.props.image ? this.props.image : fallbackImage} alt=""/>
                    <p className="feature-date"><span>Published: </span>{this.props.publishedAt}</p>
                </div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <a href={this.props.url} className="btn btn-more" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        )
    }
}

export default FeatureArticle;