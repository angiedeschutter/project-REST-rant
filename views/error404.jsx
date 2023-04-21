const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
                <img id='img' src="/images/sylwia-bartyzel-_JVeovW1fBs-unsplash.jpg" alt="sleeping cat" />
                <div>
                    Photo by <a href="Author_Link">Sylwia Bartyzel</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
            </div>
          </main>
      </Def>
    )
  }
  

module.exports=error404

