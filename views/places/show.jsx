const React = require('react')
const Def = require('../default')

function show(data) {
  return (
    <Def>
      <main>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={data.place.pic} className="img-fluid rounded-start"/>
              <p className="card-text">Located in {data.place.city}, {data.place.state}</p>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 id='show-title' className="card-title">{data.place.name}</h1>
                <h4 className="card-text">Rating</h4>
                <p className="card-text">Not Rated</p>
                <h4 className="card-text">Description</h4>
                <h5 className="card-text">
                  {data.place.showEstablished()}
                </h5>
                <h4 className="card-text">Comments</h4>
                <p className="card-text"><small className="text-body-secondary">No Comments</small></p>
              </div>
            </div>
          </div>
        
      </main>
      <span className="btn-toolbar">
        <a href={`/places/${data.id}/edit`} className="btn btn-warning btn-sm">
      <i className="fa-solid fa-pen-to-square"></i>  Edit
      </a>
      <form action={`/places/${data.id}?_method=DELETE`} method="POST" >
        <button type="submit" className="btn btn-danger btn-sm" >
        <i className="fa-regular fa-trash-can"></i> Delete
        </button>
       </form>
       </span>
    </Def>
  )
}

module.exports = show
