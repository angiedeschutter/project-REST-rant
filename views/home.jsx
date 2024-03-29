//imports react and default
const React= require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Home</h1>
              <div>
                <img id='img' src="/images/thomas-le-pRJhn4MbsMM-unsplash.jpg" alt="fresh fruit and veggies"/>
                <div>
                    Photo by <a href="Author_Link">Thomas Le</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
                <a href="/places">
                    <button className="btn btn-success"><i className="fa-solid fa-utensils"></i> Places Page</button>
                </a>
          </main>
      </Def>
    )
  }
  

module.exports = home