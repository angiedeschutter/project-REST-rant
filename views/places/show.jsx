const React = require('react')
const Def = require('../default')

function show(data) {
  let comments= (
    <h3 className="inactive">
      No Comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
      <h3>
        {Math.round(averageRating)} stars
      </h3>
    )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
                {rating}
                <h4 className="card-text">Description</h4>
                <h5 className="card-text">
                  {data.place.showEstablished()}
                </h5>
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
       <hr />
        <h2>Comments</h2>
        {comments}
        <hr />  
        <h4>Add a Comment</h4>
       <form action={`/places/${data.place.id}/comment?_method=PUT`} method="POST">
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" id="author" name="author" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="content">Comments</label>
                            <input className="form-control" id="content" name="content" />
                        </div>
                        <div className="dropdown col-sm-6">
                            <label htmlFor="stars" >Star Rating</label>
                            <select name="stars" id="stars" className="form-control">
                                <option value="0">0</option>
                                <option value="0.5">0.5</option>
                                <option value="1">1</option>
                                <option value="1.5">1.5</option>
                                <option value="2">2</option>
                                <option value="2.5">2.5</option>
                                <option value="3">3</option>
                                <option value="3.5">3.5</option>
                                <option value="4">4</option>
                                <option value="4.5">4.5</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rant">Rant?</label>
                            <input
                                type="checkbox"
                                name="rant"
                                id="rant"
                            />
                        </div>
                        <div>
                            <input className="btn btn-primary" type="submit" value="Add Comment" />
                        </div>
                    </div>
                </form>
    </Def>
  )
}
}

module.exports = show
