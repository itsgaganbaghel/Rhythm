import React from 'react'

const AlbumHeaderSection = ({ album }) => {
    let { albumDescription, albumLanguage, albumName, albumThumbnail, artistName, releasedDate } = album
    return (
        <div className='w-full h-[35vh] bg-accent text-primary flex items-center  justify-center pl-6 '>
            <header className='h-full w-[30%]'>
                <figure className='h-full w-[100%] flex items-center justify-center'>
                    <img src={albumThumbnail} className=' w-[70%] h-[90%] rounded-lg' />
                </figure>
            </header>
            <aside className='font-semibold text-secondary/80 font-mono w-[70%] pr-6'>
                <p className='text-7xl  tracking-widest mb-5 font-serif  text-primary'>{albumName.toUpperCase()}</p>
                <p className='pl-3'> By : {artistName}.</p>
                <p className='text-[1rem] pl-3'>{albumDescription.split(".")[0]}. </p>
                <p className='pl-3'> Released on " {releasedDate} "  in {albumLanguage}.</p>
            </aside>
        </div>
    )
}

export default AlbumHeaderSection