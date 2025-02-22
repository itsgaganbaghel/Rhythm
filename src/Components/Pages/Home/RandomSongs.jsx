import React, { useContext } from 'react'
import { addAlbumContext } from '../../Context/SongContext'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { RiPlayLargeLine } from 'react-icons/ri'

import gif from "../../../assets/playing.gif"

const RandomSongs = ({ count }) => {
    let { allSongs, audioPlayerData, setAudioPlayerData, setSongIndex, songIndex } = useContext(addAlbumContext)
    let handleAudio = (index) => {
        setAudioPlayerData(allSongs)
        setSongIndex(index)
    }
    return (
        <div className='w-full min-h-[38vh] text-light ' id='random_Songs'>
            <p className=' text-4xl font-serif mb-6 pl-10 font-extrabold'>Random Songs</p>
            <div className='w-full flex gap-x-10 gap-y-20 flex-wrap  justify-between  px-14'>

                {
                    allSongs.length > 0 &&
                    allSongs.filter((_, i) => i < count)
                        .map((song, index) => {
                            return (
                                <figure className=' w-[150px] ' key={index}>
                                    <div className='group relative w-[150px]   h-[150px] cursor-pointer  '>
                                        {
                                            !((audioPlayerData.length > 0) && (audioPlayerData[songIndex].songName == song.songName)) &&

                                            <div className='absolute inset-0  bg-black/70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full  '
                                                onClick={() => handleAudio(index)}
                                            >
                                                <p className='text-6xl text-white '>
                                                    <RiPlayLargeLine />
                                                </p>
                                            </div>
                                        }
                                        {
                                            ((audioPlayerData.length > 0) && (audioPlayerData[songIndex].songName == song.songName)) &&

                                            <div className='absolute  bottom-0 w-[150px] h-[100%] bg-gradient-to-t from-white to-transparent flex justify-center items-end pb-3 rounded-full cursor-pointer z-20 '
                                            onClick={() => handleAudio(index)}
                                        >
                                            <img src={gif} className='w-[60%] h-[50%]' />
                                        </div>
                                        }

                                        <img src={song?.songThumbnail} className='  rounded-full w-[150px]   h-[150px]  object-cover ' alt={song?.songName} />
                                    </div>
                                    <figcaption className='text-center mt-2 text-[1rem] font-extrabold tracking-wide'>{song?.songName}</figcaption>
                                </figure>
                            )
                        })

                }
                {
                    count &&
                    <NavLink to={''} state={''}
                        className="border-2 border-light flex items-center text-xl gap-2 px-2 w-[150px] rounded-full h-[150px] justify-center hover:bg-accent hover:text-primary hover:font-serif hover:font-bold hover:drop-shadow-[0px_0px_20px_rgba(135,206,235,0.7)] hover:border-accent">
                        <span>Check All</span>
                        <span><FaArrowRight /></span>
                    </NavLink>
                }
            </div>
        </div >
    )

}

export default RandomSongs