import React, { useContext, useState } from 'react'
import { RiPlayLargeLine } from 'react-icons/ri'
import { addAlbumContext } from '../../Context/SongContext'
import gif from "../../../assets/playing.gif"

const AlbumSongs = ({ album }) => {
    let { allSongsData } = album

    let { songIndex, setSongIndex , audioPlayerData  , setAudioPlayerData} = useContext(addAlbumContext);
    console.log(songIndex, "index");

    let handleAudioInAlbum = (indexValue) => {
        setAudioPlayerData(album?.allSongsData)
        setSongIndex(indexValue)
    }


    return (
        <div className='w-full '>
            <div className=' w-full flex  text-2xl font-serif  border-b-2 border-b-secondary sticky py-4  '>
                <p className='pl-28'>Track</p>
                <p className='pl-[25%]'>Song Name </p>
                <p></p>
            </div>
            {
                allSongsData.map((v, i) => {
                    return (
                        <div key={i} className='w-full h-[100px]   grid grid-cols-3 mb-10 rounded-md  items-center px-10 hover:bg-secondary'
                            style={(audioPlayerData.length > 0 && audioPlayerData[songIndex]?.songName === v.songName)
                                ? { background: "#292C35" }
                                : {}}
                        >
                            {/* Song Number and Thumbnail */}
                            <div className='flex items-center gap-10 ' >
                                <p className='text-2xl'>{i + 1}.</p>
                                <div className='relative group' onClick={() => handleAudioInAlbum(i)}>
                                    <img
                                        src={v?.songThumbnail}
                                        className='w-[90px] h-[80px] rounded-md object-cover border-[1px] border-slate-600/40'
                                        alt="Song Thumbnail"
                                    />
                                    {/* Overlay and Play Button */}
                                    <div className='absolute inset-0 bg-black/70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md'>
                                        <button className='text-5xl text-white'>
                                            <RiPlayLargeLine />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Song Details */}
                            <div>
                                <p className='text-[1.3rem] font-semibold'>{v?.songName}</p>
                                <p className='text-gray-400 font-serif text-[0.8rem]'>{v?.songSingers}</p>
                            </div>

                            <div className=' flex justify-center items-center w-full h-full'>

                                {
                                    ((audioPlayerData.length > 0) && (audioPlayerData[songIndex].songName == v.songName)) &&


                                    <img src={gif} className='w-[120px] h-1/2' />
                                }
                            </div>
                        </div >
                    )
                })
            }
        </div >
    )
}

export default AlbumSongs
