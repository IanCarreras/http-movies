import React, { useState } from 'react'
import axios from 'axios'

const UpdateMovie = ({movie, setMovie, history}) => {
    const { id, title, director, metascore, stars } = movie
    const [movieToUpdate, setMovieToUpdate] = useState({
        id,
        title: '',
        director: '',
        metascore: '',
        stars: ''
    })

    const handleChange = e => {
        if(e.target.name === 'stars') {
            setMovieToUpdate({
                ...movieToUpdate,
                stars: [e.target.value]
            })
        } else {
            setMovieToUpdate({
                ...movieToUpdate,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(movieToUpdate)
        axios.put(`http://localhost:5000/api/movies/${id}`, movieToUpdate)
            .then(res => {
                console.log(res)
                setMovie({})
                history.push('/')
            })
            .catch(err => {
                return err.response
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder={title} value={movieToUpdate.title} onChange={handleChange} />
            <input type='text' name='director' placeholder={director} value={movieToUpdate.director} onChange={handleChange} />
            <input type='text' name='metascore' placeholder={metascore} value={movieToUpdate.metascore} onChange={handleChange} />
            <input type='text' name='stars' placeholder={stars} value={movieToUpdate.stars} onChange={handleChange} />
            <button type='submit'>Update</button>
        </form>
    )
}

export default UpdateMovie