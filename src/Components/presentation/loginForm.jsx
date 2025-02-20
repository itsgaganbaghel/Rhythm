import { Input } from 'postcss'
import React, { useState } from 'react'

const LoginForm = () => {
    let [gender,setGender] = useState("")

    let handleUserdata =(e)=>{
        setGender(e.target.value)
    }



    let [photo, setPhoto] = useState('')

    let handleChange = (e) => {
        let { files } = e.target
        // console.log(files)
        let reader = new FileReader()
        reader.readAsDataURL(files[0])
        // reader.readAsDataURL(files[0])
        reader.onloadend = (e) => {
            console.log(e.target)
            setPhoto(e.target.result)
        }

    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(gender);
        
    }

    return (
        <div className='min-w-[100vw] min-h-[100vh]  bg-slate-700 flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='bg-slate-500 p-28 rounded-lg  flex flex-col gap-5'>
                <h2 className='text-center text-2xl'>Login Form</h2>
                <input type='file' placeholder='file' className='px-2 py-1 rounded-lg' onChange={handleChange} />
                <div className='flex gap-3'>
                    <h2>Gender:</h2>
                    <input type='radio' name="gender" value={"male"} onChange={handleUserdata}/> male
                    <input type='radio' name="gender" value={"female"} onChange={handleUserdata}/> Female
                    <input type='radio' name="gender" value={"others"} onChange={handleUserdata}/> Others

                </div>


                <button className='px-2 py-1 rounded-lg border'>Login</button>
            </form>

            <div>
                {
                    console.log(photo)
                }
                <img src={photo} />
            </div>

        </div>
    )
}

export default LoginForm