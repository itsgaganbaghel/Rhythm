import React, { useContext } from 'react'
import CustomNavLink from '../../utilities/CustomNavLink'
import Logo from '../../NavBarComponent/Logo'
import { modalProviderContext } from '../../Context/ModalContext'
import Modal from '../../Model/Modal'
import { signOut } from 'firebase/auth'
import { __AUTH } from '../../../../Backend/Firebase'
import { useNavigate } from 'react-router-dom'
import { AuthUserContext } from '../../Context/AuthContext'
import toast from 'react-hot-toast'

const AlbumSideBar = () => {
    let { isVisibility, setVisibility, targetModel, setTargetModel } = useContext(modalProviderContext)
    let { profileData, authUserData, role } = useContext(AuthUserContext || {})
    let navigate = useNavigate()
    let handleSingOut = (e) => {
        signOut(__AUTH)
        window.localStorage.removeItem("TOKEN")
        navigate('/')
        toast.success("Log Out Successfully")
    }

    let handleSingOutMethods = () => {
        navigate('/')
        setTargetModel('logout')
        setVisibility(true)
    }

    return (
        <div className=' min-h-[100vh] flex flex-col gap-2  items-center bg-primary border-r-2 border-r-accent text-light font-bold tracking-wide px-3  '>
            <Logo />
            <p className='w-full pl-1 opacity-70 text-sm text-accent'>Browse</p>

            <a href='#Hero'
                className='w-full text-start  hover:text-center py-2 px-4 rounded-lg hover:bg-light hover:text-primary transition-all duration-300'
            >
                Home
            </a>
            <a href='#top_Album'
                className='w-full text-start  hover:text-center py-2 px-4 rounded-lg hover:bg-light hover:text-primary transition-all duration-300'
            >
                Top Albums
            </a>
            <a href='#trending_Artist'
                className='w-full text-start  hover:text-center py-2 px-4 rounded-lg hover:bg-light hover:text-primary transition-all duration-300'
            >
                Trending Artist
            </a>
            <a href='#new_Release'
                className='w-full text-start  hover:text-center py-2 px-4 rounded-lg hover:bg-light hover:text-primary transition-all duration-300'
            >
                New Release
            </a>
            <a href='#random_Songs'
                className='w-full text-start  hover:text-center py-2 px-4 rounded-lg hover:bg-light hover:text-primary transition-all duration-300'
            >
                Random Songs
            </a>

            <p className='w-full pl-1 opacity-70 text-sm text-accent mt-6'>Library</p>
            <CustomNavLink to={'/'} text={"All Albums"} />
            <CustomNavLink to={'/'} text={"Liked Songs"} />

            {
                authUserData !== null &&
                <>
                    <p className='w-full pl-1 opacity-70 text-sm text-accent mt-6'>user</p>
                    {
                        profileData?.isAdmin &&
                        < CustomNavLink to={'/user/addAlbum'} text={"Add Album"} />
                    }

                    {/* {
                        profileData?.isAdmin  && < CustomNavLink to={'/user/presentation/addAlbum'} text={"Add Album"} />
                    } */}
                    <CustomNavLink to={'/user'} text={"Setting"} />
                    <button className='w-full text-start  hover:text-center py-2 px-4 rounded-lg hover:bg-light hover:text-primary transition-all duration-300'
                        onClick={handleSingOutMethods}
                    >Sign Out</button>

                    {
                        (isVisibility == true && targetModel == 'logout') &&
                        <Modal >
                            <div className='px-44 rounded-2xl py-24 shadow-[inset_5px_-5px_5px_#101215,inset_-5px_5px_5px_#424655] bg-secondary '>
                                <p className='text-3xl font-serif text-light pb-10'>Are You want to Log Out ?</p>
                                <div className='flex gap-10 '>
                                    <button className='w-full border   text-accent text-center py-2 px-4 rounded-lg hover:bg-light hover:text-primary transition-all duration-300'
                                        onClick={handleSingOut}
                                    >Yes</button>
                                    <button className='w-full border  text-accent  text-center py-2 px-4 rounded-lg hover:bg-light hover:text-primary transition-all duration-300'
                                        onClick={() => { setTargetModel(null), setVisibility(false) }}
                                    >No</button>
                                </div>
                            </div>
                        </Modal>
                    }


                </>
            }
        </div>
    )
}

export default AlbumSideBar