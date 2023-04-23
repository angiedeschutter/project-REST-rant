const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
                <link rel='stylesheet' href="/css/style.css"></link>
            </head>
            <body>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul>
                        <li>
                            <a href="/"><i className="fa-solid fa-house"></i> Home</a>
                        </li>
                        <li>
                            <a href="/places" ><i className="fa-solid fa-utensils"></i> Places</a>
                        </li>
                        <li>
                            <a href="/places/new"><i className="fa-solid fa-plus"></i> Add Place</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                {html.children}
                <script src="https://kit.fontawesome.com/9102e56990.js" crossOrigin="anonymous"></script>
            </body>
        </html>
    )
  }
  
//Exports Def function
module.exports = Def