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
          image: "https://images.gnews.io/295c2711204e9f904b3727bf50af4c32"
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
              <img src={this.state.articles[0].image} alt=""/>
            </div>
          </section>
          <section className="category-news"></section>
        </main>
      </div>
    )
  }

}

export default App;
