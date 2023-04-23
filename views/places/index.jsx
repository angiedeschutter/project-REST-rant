//used for places index
const React = require('react')
const Def = require('../default')
 


function index (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="card" style={{width: '18rem'}}>
      <a href={`/places/${index}`}  className="btn btn-success">{place.name}</a>
      <img className="card-img-top" src={place.pic} alt={place.name} />
      <div className="card-body">
        <h5 className="card-title">{place.cuisines}</h5>
        <p className="card-text">Located in {place.city}, {place.state}</p>
      </div>
    </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className='row'>
              {placesFormatted}
            </div>
        </main>
    </Def>
)
}

  

module.exports=index

