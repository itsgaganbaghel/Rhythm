import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AlbumHeaderSection from './AlbumHeaderSection'
import AlbumSongs from './AlbumSongs'
import { addAlbumContext } from '../../Context/SongContext'

const AlbumDetails = () => {
    let stateData = useLocation()
    let { album } = stateData.state
    console.log('album', album)

    return (
        <div className=' w-[86vw] relative mb-[17vh]'>
            <AlbumHeaderSection album={album} />
            <AlbumSongs album={album} />
        </div>

    )
}

export default AlbumDetails