import React, { Component } from 'react';
import Article from './components/Article/Article';
import Search from './components/Search/Search';
import { Transition, CSSTransition } from 'react-transition-group';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  state = {
    phrase: '',
    articlesArr: [
      {
        title: 'What You Need To Know About CSS Variables',
        url: 'https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
        image: 'https://tutorialzine.com/media/2016/03/css-variables.jpg'
      },
      {
        title: 'Freebie: 4 Great Looking Pricing Tables',
        url: 'https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
        image: 'https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg'
      },
      {
        title: '20 Interesting JavaScript and CSS Libraries for February 2016',
        url: 'https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
        image: 'https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg'
      },
      {
        title: 'Quick Tip: The Easiest Way To Make Responsive Headers',
        url: 'https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
        image: 'https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png'
      },
      {
        title: 'Learn SQL In 20 Minutes',
        url: 'https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
        image: 'https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png'
      },
      {
        title: 'Creating Your First Desktop App With HTML, JS and Electron',
        url: 'https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
        image: 'https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png'
      }
    ]
  }

  searchHandler = (event) => {
    const phrase = event.target.value.toLowerCase();
    this.setState({phrase: phrase});
  }

  render() {
    let articles = null;
    let noResults = null;
    let inProp = false;
    const filiteredArticles = this.state.articlesArr.filter(el => el.title.toLowerCase().indexOf(this.state.phrase) !== -1);

    if(filiteredArticles.length === 0) {
      inProp = true;
      noResults = (
        <h3 className="Msg-empty">No match for: <span>{this.state.phrase}</span></h3>
      )
    } else {
      inProp = false;
      noResults = null;
    }

    articles = (
      <ul className="List">
        {filiteredArticles.map(article => {
          return <Article
            url={article.url}
            img={article.image}
            title={article.title}/>
        })}
      </ul>
    )

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Search change={(event) => this.searchHandler(event)} />
        {articles}
        <CSSTransition in={inProp} timeout={500} classNames="slide">
          <div key="transition-group-content">
            {noResults}
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
