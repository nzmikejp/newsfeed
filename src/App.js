import React, { Component } from 'react'
import logo from './logo.svg'
import './assets/css/style.css'

//NewsAPI: https://gnews.io/docs/v3#news-from-topic
var token = 'ae98dd086fefbd7e495898bb6f482e8d'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

}

export default App;
