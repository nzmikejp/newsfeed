import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './assets/css/style.css'

//NewsAPI: https://gnews.io/docs/v3#news-from-topic
var token = 'ae98dd086fefbd7e495898bb6f482e8d'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      articles: [
        {
          id: 1,
          title: "COVID-19 testing 'very likely' when Royal Caribbean returns to cruising, executive says",
          description: "Royal Caribbean Group is set to begin COVID-19 testing on its ships when cruise operations return, according to an executive.",
          publishedAt: "2020-08-10 18:14:00 UTC",
          image: "https://images.gnews.io/295c2711204e9f904b3727bf50af4c32",
          url: "https://www.thestreet.com"
        }
      ]
    }
  }

  loadArticlesByTopic = (topic) => {
    var url = 'https://gnews.io/api/v3/topics/'+topic+'?token='+token
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles
        console.log(articles)
      })
  }

  loadArticlesByTerm = (term) => {

    var url = 'https://gnews.io/api/v3/search?q='+term+'&token='+token
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles
        console.log(articles)
      })
  }

  // componentDidMount(){
  //   this.loadArticlesByTopic
  // }
  
  // componentDidMount(){
  //   this.loadArticlesByTerm
  // }



  render(){

    return (
      <div className="wrap">
        <header>
          <div className="header-content">
            <div className="search">
              <form action="#">
                <div className="form-group">
                  <input type="text" id="search" placeholder="Type your topic here"/>
                  <div className="btn">
                    <button type="submit"><i class="fas fa-search"></i></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
        </header>
        <main>
          <section className="top-news">
            <div className="feature-article">
              <div className="feature-image">
                <img src={this.state.articles[0].image} alt=""/>
                <p className="feature-date"><span>Published: </span>{this.state.articles[0].publishedAt}</p>
              </div>
              <h1>{this.state.articles[0].title}</h1>
              <p>{this.state.articles[0].description}</p>
              <a href={this.state.articles[0].url} className="btn btn-more" target="_blank">Read more</a>
            </div>
          </section>
          <section className="category-news">
            <Tabs defaultActiveKey="world" id="tabs">
              <Tab eventKey="world" title="World">
                <div className="category-article">
                  <div className="article-content">
                    <h1>{this.state.articles[0].title}</h1>
                    <p>{this.state.articles[0].description}</p>
                    <a href={this.state.articles[0].url} className="btn btn-more" target="_blank">Read more</a>
                  </div>
                  <div className="article-image">
                    <img src={this.state.articles[0].image} alt=""/>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="nation" title="Nation">
                
              </Tab>
              <Tab eventKey="business" title="Business">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit placeat illum iste pariatur, perspiciatis expedita itaque hic aperiam eum laudantium consequuntur numquam, corrupti labore quaerat ipsam a, amet praesentium fugiat necessitatibus natus. Harum corporis fugit, culpa amet atque iure dolorum voluptatum iusto illo quae, consectetur ratione optio dignissimos aliquam!</p>
              </Tab>
              <Tab eventKey="technology" title="Technology">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit placeat illum iste pariatur, perspiciatis expedita itaque hic aperiam eum laudantium consequuntur numquam, corrupti labore quaerat ipsam a, amet praesentium fugiat necessitatibus natus. Harum corporis fugit, culpa amet atque iure dolorum voluptatum iusto illo quae, consectetur ratione optio dignissimos aliquam!</p>
              </Tab>
            </Tabs>
          </section>
        </main>
      </div>
    )
  }

}

export default App;
