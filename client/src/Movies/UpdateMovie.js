import React, { useState } from 'react'
import axios from 'axios'

const UpdateMovie = ({movie, setMovie, match, history}) => {
    const { id, title, director, metascore, stars } = movie
    const [movieToUpdate, setMovieToUpdate] = useState({
        id,
        title,
        director,
        metascore,
        stars
    })

    const handleChange = e => {
        setMovieToUpdate({
            ...movieToUpdate,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axios.put(match.params.url, movieToUpdate)
            .then(res => {
                setMovie({})
                history.push('/movies')
            })
            .catch(err => {
                return err.response
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='id' placeholder={id} value={id} onChange={e => handleChange(e)} />
            <input name='title' placeholder={title} value={title} onChange={e => handleChange(e)} />
            <input name='director' placeholder={director} value={director} onChange={e => handleChange(e)} />
            <input name='metascore' placeholder={metascore} value={metascore} onChange={e => handleChange(e)} />
            <input name='stars' placeholder={stars} value={stars} onChange={e => handleChange(e)} />
            <button type='submit'>Update</button>
        </form>
    )
}

export default UpdateMovie