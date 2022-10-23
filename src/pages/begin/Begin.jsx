import React from 'react';
import images from '../../assets/images/image';
import "./begin.scss";

const Begin = () => {
    return (
        <>
            <div className='w-full h-[660px] relative'>
                <img
                    className='w-full h-[660px] absolute'
                    src={images.backgroundEnglish}
                    alt="background"
                />
                <div className='w-full h-[660px] absolute bg-black/75 top-0 left-0 bottom-0'></div>
                <div className='absolute w-full px-4 py-16 z-0'>
                    <div className='max-w-[900px] h-[500px] mx-auto bg-slate-300 text-white modal__login rounded-xl flex items-center justify-center'>
                        <form action="">
                            <div className='h-[450px] w-[360px] bg-slate-100 mr-8 rounded-2xl'>
                                <h1 className='text-black/80 text-3xl font-bold text-start pt-8 pl-4'>Login</h1>
                                <div className='pl-4 mt-5'>
                                    <label htmlFor="" className='text-gray-500 text-lg font-semibold'>Username</label>
                                    <input
                                        className='w-[320px] placeholder:text-slate-400 text-slate-400 rounded-lg p-[10px] mt-1 border-2 border-slate-500'
                                        placeholder="Username"
                                        type="text"
                                    />
                                </div>
                                <div className='pl-4 mt-5'>
                                    <label htmlFor="" className='text-gray-500 text-lg font-semibold'>Password</label>
                                    <input
                                        className='w-[320px] placeholder:text-slate-400 text-slate-400 font-medium rounded-lg p-[10px] mt-1 border-2 border-slate-500'
                                        placeholder="Enter 6 character or more"
                                        type="text"
                                    />
                                </div>
                                <div className='pl-4 mt-5 text-gray-400 font-semibold flex justify-between'>
                                    <div>
                                        <input type="checkbox" className='mr-2 p-2' />Remember me
                                    </div>
                                    <div className='pr-6'>
                                        <a href="/" className='underline underline-offset-1 decoration-sky-500 text-blue-300'>Forgot Password?</a>
                                    </div>
                                </div>
                                <button
                                    className='bg-cyan-400 w-[320px] py-3 rounded-lg mt-8 ml-4'
                                >
                                    LOGIN
                                </button>
                            </div>
                        </form>
                        <img
                            src={images.banner}
                            alt='quandaubui'
                            className='w-1/2 h-[500px] rounded-xl'
                        />
                    </div>
                </div>
            </div>
            <div className='h-10 w-full bg-red-800'>

            </div>
        </>
    )
}

export default Begin;