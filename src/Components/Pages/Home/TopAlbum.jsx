import React, { useContext } from 'react'
import { addAlbumContext } from '../../Context/SongContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';


const TopAlbum = () => {

    let { allAlbums } = useContext(addAlbumContext || [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='w-full min-h-[38vh] text-light   ' id='top_Album'>
            <p className=' text-4xl font-serif mb-6 pl-6  font-extrabold'> Top Albums</p>
            {
                allAlbums.length > 0 &&
                <div className='w-full px-14 '>
                    <Slider  {...settings}>
                        {
                            allAlbums?.length > 0 &&
                            allAlbums.map((album, index) => {
                                return (
                                    <NavLink to={`/album/${album.id}`} state={{ album }} key={index}>
                                        <figure className='bg-secondary pt-4 px-4 pb-4 rounded-xl w-[250px]  shadow-[inset_5px_-5px_5px_#101215,inset_-5px_5px_5px_#424655]'>
                                            <img src={album?.albumThumbnail} className=' rounded-lg w-full h-[200px]' />
                                            <figcaption className='text-center mt-2 text-[1rem] font-extrabold tracking-wide'>{album?.albumName}</figcaption>
                                        </figure>
                                    </NavLink>

                                )
                            })
                        }
                        {
                            allAlbums?.length > 0 &&
                            allAlbums.map((album, index) => {
                                return (
                                    <NavLink to={`/album/${album.id}`} state={{ album }} key={index}>
                                        <figure className='bg-secondary pt-4 px-4 pb-4 rounded-xl w-[250px]  shadow-[inset_5px_-5px_5px_#101215,inset_-5px_5px_5px_#424655]'>
                                            <img src={album?.albumThumbnail} className=' rounded-lg w-full h-[200px]' />
                                            <figcaption className='text-center mt-2 text-[1rem] font-extrabold tracking-wide'>{album?.albumName}</figcaption>
                                        </figure>
                                    </NavLink>

                                )
                            })
                        }


                    </Slider>
                </div>
            }


        </div>

    )
}

export default TopAlbum