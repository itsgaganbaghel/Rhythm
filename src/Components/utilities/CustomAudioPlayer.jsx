// AudioPlayer.jsx
import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaPause, FaVolumeDown, FaVolumeUp } from 'react-icons/fa';
import { IoPlayBackSharp, IoPlayForwardSharp, IoPlaySharp } from 'react-icons/io5';
import { addAlbumContext } from '../Context/SongContext';


const CustomAudioPlayer = ({ tracks }) => {

    let { songIndex, setSongIndex } = useContext(addAlbumContext);

    const [trackIndex, setTrackIndex] = useState(0);

    useEffect(() => {
        setTrackIndex(songIndex)
        console.log(songIndex)
        // return setTrackIndex(0)
    }, [songIndex])

    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0.5); // Initial volume set to 50%

    const audioRef = useRef(new Audio(tracks[songIndex].audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { songName: title, songActors: artist, color, songThumbnail: image, songUrl: audioSrc } = tracks[songIndex];
    const { duration } = audioRef.current;

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                handleNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch((e) => console.log("Playback error:", e));
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    }, [isPlaying]);


    useEffect(() => {
        if (!audioSrc) return;

        audioRef.current.pause();
        audioRef.current.src = audioSrc; // Instead of creating a new Audio instance
        audioRef.current.volume = volume;
        setTrackProgress(0); // Reset progress for new song

        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        }
    }, [trackIndex, audioSrc]);


    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);


    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
            setIsPlaying(false)
        }
    };

    const handlePrevTrack = () => {
        if (trackIndex > 0) {
            setTrackIndex(trackIndex - 1);
        } else {
            setTrackIndex(tracks.length - 1);
        }
    };
    const increaseVolume = () => {
        setVolume((prevVolume) => (prevVolume < 1 ? prevVolume + 0.1 : 1));
    };

    const decreaseVolume = () => {
        setVolume((prevVolume) => (prevVolume > 0 ? prevVolume - 0.1 : 0));
    };

    const onScrub = (value) => {
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        if (isPlaying) {
            startTimer();
        }
    };

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
    -webkit-gradient(linear, left top, right top,
      color-stop(${currentPercentage}, #fff),
      color-stop(${currentPercentage}, #777))
  `;

    const volumeStyling = `
      -webkit-gradient(linear, left top, right top,
      color-stop(${volume}, #fff),
      color-stop(${volume}, #777))
    `;

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }


    return (
        <div className="flex  max-h-[15vh] min-[15vh] items-center  gap-5  bg-secondary shadow-2xl text-white  pl-4 py-4 w-[86vw] ">

            <div className='min-w-[20%] h-full flex justify-start items-center gap-4  '>

                <img src={image} alt={`Artwork for ${title}`} className="w-16 rounded-full object-cover custom-spin" />


                <div className="">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-gray-400 text-sm">{artist}</p>
                </div>
            </div>

            <div className='w-[65%] h-full '>
                <div className="w-full flex items-center justify-center gap-10 mb-4  ">
                    <p>mute</p>
                    <button onClick={handlePrevTrack} className="text-gray-500 text-3xl hover:text-white focus:outline-none">
                        <IoPlayBackSharp />
                    </button>
                    <button onClick={handlePlayPause} className="text-gray-500 hover:text-white focus:outline-none text-2xl">
                        {isPlaying ? <FaPause /> : <IoPlaySharp />}
                    </button>
                    <button onClick={handleNextTrack} className="text-gray-500 text-3xl hover:text-white focus:outline-none">
                        <IoPlayForwardSharp />
                    </button>

                    <p>loop</p>


                </div>

                <div className="w-full flex w- justify-center items-center gap-6 text-gray-400  ">
                    <p className='text-2xl pb-1'>{formatTime(trackProgress)}</p>
                    <input
                        type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration ? duration : `${duration}`}
                        className="w-[80%] bg-gray-700 rounded-full appearance-none h-2"
                        style={{ background: trackStyling }}
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onTouchend={onScrubEnd}
                    />
                    <p className='text-2xl pb-1'>{duration ? formatTime(duration) : "--/--"}</p>
                </div>
            </div>

            {/* Volume Controls */}
            <div className="flex items-center h-full min-w-[15%] max-w-[15%]   ">

                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    style={{ background: volumeStyling }}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-24  py-3 rounded-full appearance-none  -rotate-90 shadow-[5px_5px_30px_rgba(20,20,20,0.8),5px_5px_30px_rgba(60,60,60,0.8)] bg-primary text-white "
                />

                <div className='flex flex-col gap-4  min-h-[8vh] justify-center '>
                    <button onClick={decreaseVolume} className="text-gray-500 hover:text-white focus:outline-none text-xl  p-2 rounded-full shadow-[2px_2px_10px_rgba(163,177,198,0.5),-2px_-2px_10px_rgba(255,255,255,0.6)]">
                        <FaVolumeDown />
                    </button>
                    <button onClick={increaseVolume} className="text-gray-500 hover:text-white focus:outline-none text-xl  p-2 rounded-full shadow-[2px_2px_10px_rgba(163,177,198,0.5),-2px_-2px_10px_rgba(255,255,255,0.6)]">
                        <FaVolumeUp />
                    </button>
                </div>
            </div>


        </div>
    );
};

export default CustomAudioPlayer;
