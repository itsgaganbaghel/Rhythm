import React, { useContext } from 'react'
import { addAlbumContext } from '../../Context/SongContext'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const RandomSongs = ({ count }) => {
    let { allSongs } = useContext(addAlbumContext)

    return (
        <div className='w-full min-h-[38vh] text-light ' id='random_Songs'>
            <p className=' text-4xl font-serif mb-6 pl-10 font-extrabold'>Random Songs</p>
            <div className='w-full flex gap-x-10 gap-y-20 flex-wrap  justify-between  px-14'>

                {
                    allSongs.length > 0 &&
                    allSongs.filter((_, i) => i < count)
                        .map((song, index) => {
                            return (
                                <figure className=' w-[250px]  ' key={index}>
                                    <img src={song?.songThumbnail} className=' w-[200px] rounded-full h-[200px] m-auto object-cover' />
                                    <figcaption className='text-center mt-2 text-[1rem] font-extrabold tracking-wide'>{song?.songName}</figcaption>
                                </figure>
                            )
                        })

                }
                {
                    count &&
                    <NavLink to={''} state={''}
                        className="border-2 border-light flex items-center text-2xl gap-4 px-3 w-[200px] rounded-full h-[200px] justify-center hover:bg-accent hover:text-primary hover:font-serif hover:font-extrabold hover:drop-shadow-[0px_0px_20px_rgba(135,206,235,0.7)] hover:border-accent">
                        <span>Check All</span>
                        <span><FaArrowRight /></span>
                    </NavLink>
                }
            </div>
        </div>
    )

}

export default RandomSongs