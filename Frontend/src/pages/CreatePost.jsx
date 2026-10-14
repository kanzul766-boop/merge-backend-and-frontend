import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreatePost = () => {


    const handleSubmit = async (e) => {
        e.preventDefault()
        alert("Post submitted   ")
    }

    return (
        <section className='create-post-section' >
            <h1>Create post</h1>

            <form onSubmit={handleSubmit} >

                <input type="file" name="image" accept="image/*" />
                <input type="text" name='desc' placeholder='Enter description' required />
                <button type='submit' >Submit</button>

            </form>

        </section>
    )
}

export default CreatePost