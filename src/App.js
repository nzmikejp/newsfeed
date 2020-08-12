import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './assets/css/style.css'
import CategoryArticle from './CategoryArticle'
import FeatureArticle from './FeatureArticle'

//NewsAPI: https://gnews.io/docs/v3#news-from-topic
var token = 'c6bded52983277fbbff7947c51883152'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      articlesWorld: [],
      articlesNation: [],
      articlesBusiness: [],
      articlesTechnology: [],
      articlesSearch: [
        {
          id: Date.now(),
          title: "Oil edges higher on upbeat Aramco",
          description: "JOHANNESBURG: Sasol Ltd says it will swing to a full-year loss per share after writedowns on US chemical assets contributed to 112 billion rand (US$6.3bil) of charges and oil prices declined.",
          url: "https://www.thestar.com.my/business/business-news/2020/08/12/oil-edges-higher-on-upbeat-aramco",
          publishedAt: "2020-08-11 17:38:00 UTC",
          image: "https://images.gnews.io/b1e59929d8b52f1b05607db92c91935a",
        }
      ],
      searchTerm: ''
    }
  }

  loadArticlesByTerm = (term) => {
    var url = 'https://gnews.io/api/v3/search?q='+term+'&token='+token
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles

        if(term === 'world'){
          this.setState({
            articlesWorld: articles
          })
        }else if(term === 'nation'){
          this.setState({
            articlesNation: articles
          })
        }else if(term === 'business'){
          this.setState({
            articlesBusiness: articles
          })
        }else if(term === 'technology'){
          this.setState({
            articlesTechnology: articles
          })
        }
      })
  }
  
  loadArticlesBySearch = (term) => {
    var url = 'https://gnews.io/api/v3/search?q='+term+'&token='+token
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles
        this.setState({
          articlesSearch: articles
        })
      })
  }

  handleSearchInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearchClick = (e) => {
    e.preventDefault()
    var target = this.state.searchTerm
    this.loadArticlesBySearch(target)

    this.setState({
      searchTerm: ''
    })
  }


  
  componentDidMount(){
    this.loadArticlesByTerm('world')
    this.loadArticlesByTerm('nation')
    this.loadArticlesByTerm('business')
    this.loadArticlesByTerm('technology')
  }



  render(){

    return (
      <div className="wrap">
        <header>
          <div className="header-content">
            <div className="search">
              <form action="#">
                <div className="form-group">
                  <input type="text" id="search" placeholder="Type your topic here" onChange={this.handleSearchInput} value={this.state.searchTerm}/>
                  <div className="btn">
                    <button type="submit" onClick={this.handleSearchClick}><i class="fas fa-search"></i></button>
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
            <div className="feature-article-wrap">
              {
                this.state.articlesSearch.map(article => {
                  var props = {
                    key: article.id,
                    loadArticlesBySearch: this.loadArticlesBySearch,
                    ...article
                  }
  
                  return (
                    <FeatureArticle {...props} />
                  )
                })
              }
            </div>
          </section>
          <section className="category-news">
            <Tabs defaultActiveKey="world" id="tabs">
              <Tab eventKey="world" title="World">
                {
                  this.state.articlesWorld.map(article => {
                    var props = {
                      key: article.id,
                      loadArticlesByTerm: this.loadArticlesByTerm,
                      ...article
                    }

                    return (
                      <CategoryArticle {...props} />
                    )
                  })
                }
              </Tab>
              <Tab eventKey="nation" title="Nation">
                {
                  this.state.articlesNation.map(article => {
                    var props = {
                      key: article.id,
                      loadArticlesByTerm: this.loadArticlesByTerm,
                      ...article
                    }

                    return (
                      <CategoryArticle {...props} />
                    )
                  })
                }
              </Tab>
              <Tab eventKey="business" title="Business">
                {
                  this.state.articlesBusiness.map(article => {
                    var props = {
                      key: article.id,
                      loadArticlesByTerm: this.loadArticlesByTerm,
                      ...article
                    }

                    return (
                      <CategoryArticle {...props} />
                    )
                  })
                }
              </Tab>
              <Tab eventKey="technology" title="Technology">
                {
                  this.state.articlesTechnology.map(article => {
                    var props = {
                      key: article.id,
                      loadArticlesByTerm: this.loadArticlesByTerm,
                      ...article
                    }

                    return (
                      <CategoryArticle {...props} />
                    )
                  })
                }
              </Tab>
            </Tabs>
          </section>
        </main>
      </div>
    )
  }

}

export default App;
