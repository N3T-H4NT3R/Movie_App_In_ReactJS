import React from 'react'

function Movie_List(props) {
  const Add_Fave = props.Add_Fave
  return (
    <>
        {
            props.Movies.map(
                (Movie, index) =>
                <div className='image-container d-flex justity-content-start m-3'>
                    <img src={Movie.Poster} alt="Harry Potter Picture" height="400px" width="400px" />
                    <div onClick={() =>props.favoriteChosen(Movie)} className="overlay d-flex align-items-center justify-content-center">
                      <Add_Fave/>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default Movie_List
