import React, { useContext, useEffect, useState } from 'react'
import { addAlbumContext } from '../../Context/SongContext'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const NewReleased = ({ count, unique = false }) => {
    let { allSongs } = useContext(addAlbumContext)
    let [allSortedSongs, setAllSortedSongs] = useState([])

    let findSortedArrayOfSongs = () => {
        let sortedSongs = [...allSongs].sort((a, b) => new Date(b.songReleasedDate) - new Date(a.songReleasedDate));
        let uniqueSongs = [];
        let seenDates = new Set();
        if (unique) {
            for (let song of sortedSongs) {
                let releaseDate = new Date(song.songReleasedDate).toISOString().split('T')[0]; // Extract YYYY-MM-DD format
                if (!seenDates.has(releaseDate)) {
                    seenDates.add(releaseDate);
                    uniqueSongs.push(song);
                }
                if (uniqueSongs.length >= (count ? count : allSongs.length)) break; // Stop if we reach the required count
            }

            setAllSortedSongs(uniqueSongs);
        } else {
            setAllSortedSongs(sortedSongs.filter((_, i) => i < count));
        }
    }

    useEffect(() => {
        findSortedArrayOfSongs()
    }, [allSongs])

    return (
        <div className='w-full min-h-[38vh] text-light  ' id='new_Release'>
            <p className=' text-4xl font-serif mb-6 pl-8  font-extrabold'>New Released</p>
            <div className='w-full flex flex-wrap justify-between px-14 '>
                {
                    allSortedSongs.length > 0 &&
                    allSortedSongs.map((song, index) => (
                        <figure className='w-[250px]' key={index}>
                            <img src={song?.songThumbnail} className='w-[200px] rounded-full h-[200px] m-auto object-cover' alt={song?.songName} />
                            <figcaption className='text-center mt-2 text-[1rem] font-extrabold tracking-wide'>{song?.songName}</figcaption>
                        </figure>
                    ))
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

export default NewReleased
