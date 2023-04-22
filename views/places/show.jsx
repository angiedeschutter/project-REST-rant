const React = require('react')
const Def = require('../default')

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <h2>Rating</h2>
        <h3>Not Rated</h3>
        <h2>Description</h2>
        <h3>Located in ...</h3>
        <div>
          <h2>Comments</h2>
          <h3>No comments Yet</h3>
        </div>
      </main>
      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        Edit
      </a>
      <form action={`/places/${data.id}?_method=DELETE`} method="POST" >
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </Def>
  )
}

module.exports = show
