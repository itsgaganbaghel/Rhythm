import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import AlbumHeaderSection from './AlbumHeaderSection'
import AlbumSongs from './AlbumSongs'
import CustomAudioPlayer from '../../utilities/CustomAudioPlayer'

const AlbumDetails = () => {
    let stateData = useLocation()
    let { album } = stateData.state
    // console.log(album.allSongsData)  

    return (
        <div className=' w-[84vw] relative'>
            <AlbumHeaderSection album={album} />
            <AlbumSongs album={album} />
            <div className=' w-full fixed bottom-0'>
                <CustomAudioPlayer albumData={album} />
            </div>

        </div>

    )
}

export default AlbumDetails