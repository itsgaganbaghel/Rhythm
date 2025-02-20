import React, { useState } from 'react'

const AddAlbumPresentation = () => {

    let initialData = {
        albumName: "",
        albumDescription: "",
        albumSingers: '',
        albumReleaseDate: null,
        allSongs: []
    }

    let [albumDataPresentation, setAlbumDataPresentation] = useState(initialData)

    let handleChange = (e) => {
        let { name, value, type } = e.target


        type == "file" ?
            setAlbumDataPresentation({ ...albumDataPresentation, [name]: e.target.files })
            :
            setAlbumDataPresentation({ ...albumDataPresentation, [name]: value })

    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(albumDataPresentation)
    }


    return (
        <div className='w-full h-full'>

            <form
                onSubmit={handleSubmit}
                className='w-full h-full grid grid-cols-2 gap-x-20 gap-y-12 border px-10 py-16 rounded-lg'>
                <input onChange={handleChange} placeholder='enter Album Name here'
                    name='albumName'
                    className='bg-transparent  px-4 py-2 border-b-2 border-b-light'
                />
                <input onChange={handleChange} placeholder='enter albumDescription here'
                    name='albumDescription'
                    className='bg-transparent  px-4 py-2 border-b-2 border-b-light'
                />
                <input onChange={handleChange} placeholder='enter albumSingers Name here'
                    name='albumSingers'
                    className='bg-transparent  px-4 py-2 border-b-2 border-b-light'
                />
                <input onChange={handleChange} type='date'
                    name='albumReleaseDate'
                    className='bg-transparent  px-4 py-2 border-b-2 border-b-light file:rounded-lg file:bg-light'
                />

                {/*  songs and thumbnail of album */}
                <input onChange={handleChange} type='file' multiple
                    name='allSongs'
                    className='bg-transparent  px-4 py-2 border-b-2 border-b-light file:rounded-lg file:bg-light'
                />

                <div className='  w-full h-full flex justify-center items-center'>
                    <button type='submit' className='bg-light px-3 py-1 text-primary rounded-lg  font-semibold'>Add Album</button>
                </div>





            </form>
        </div>
    )
}

export default AddAlbumPresentation