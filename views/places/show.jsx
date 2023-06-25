const React = require("react")
const Def = require("../layouts/default")

function Show (data) {
  let comments = (
    <h3 className="inactive">No comments yet!</h3>
  )

  let rating = (
    <h3 className="inactive">Not yet rated.</h3>
  )

  if (data.place.comments.length) {

    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ""
    for (let i = 0; i < averageRating; i++) {
      stars += "â­ï¸"
    }
    rating = (
      <h3>{stars} stars.</h3>
    )
    


    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant!" : "Rave!"}</h2>
          <h4>{c.content}</h4>
          <h3><strong>- {c.author}</strong></h3>
          <h4>Ratings: {c.stars}</h4>

          <form action="/places" method="POST">

              <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input className="form-control"
                          type="text"
                          name="author"
                          id="author"
                          required />
              </div> 

              <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <input className="form-control"
                          type="number"
                          name="content"
                          id="content"
                          required />
              </div> 

              <div className="form-group">
                  <label htmlFor="stars">Star Rating</label>
                  <input className="form-control"
                          type="number"
                          name="stars"
                          id="stars"
                          required />
              </div> 

              <div className="form-group">
                  <label htmlFor="rant">Rant</label>
                  <input className="form-control"
                          type="checkbox"
                          name="rant"
                          id="rant"
                          required />
              </div> 

                  <input className="btn btn-primary" type="submit" value="Submit"/>

          </form>

        </div>
      )
    })
  }
    return (
        <Def>
          <main>
          <h1>{data.place.name}</h1>

          <h2>Rating: {rating}</h2> <br />

          <div className="row">
              <div className="col-sm-6">

                <img src={data.place.pic} alt={data.place.name}/>

                <h3>Located in {data.place.city}, {data.place.state}</h3>

              </div>

              <div className="col-sm-6">

                  <h2>Description</h2>

                  <h3>{data.place.showEstablished()}</h3>

                  <h4>Serving {data.place.cuisines}</h4>

                  <h3>Rating</h3>
                  <p>Not Rated</p>

                  <h2>Comments</h2>
                  {comments}

              </div>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>

            </div>
          </main>
        </Def>
    )
}

module.exports = Show