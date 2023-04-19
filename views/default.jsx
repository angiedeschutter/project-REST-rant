const React = require('react')

//stub function
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  
//Exports Def function
module.exports = Def