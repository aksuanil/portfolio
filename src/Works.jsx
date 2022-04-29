import React from 'react'
import otherCinemaImg from './assets/images/othercinema.png'
import { Fade } from "react-awesome-reveal";

export default function Works() {
    return (

        <div className='flex justify-center w-full' id='works'>
            <div className='flex flex-col mb-8 w-10/12'>
                <div className='flex sm:my-6 mb-4 justify-center sm:justify-start'>
                    <div className='text-3xl sm:text-5xl pt-4 first-letter:text-7xl'>WORKS</div>
                </div>
                <div className='flex flex-col gap-8 sm:gap-12 text-center sm:text-left'>
                    <Fade duration={2000} cascade={true} damping={0.2} triggerOnce={true}>
                        <div className='flex flex-col justify-start sm:flex-row gap-2'>
                            <div className='w-full max-w-lg'>
                                <div className="group flex justify-center items-center relative cursor-pointer text-4xl overflow-hidden ">
                                    <img className='sm:w-max h-auto transition ease-in-out duration-500 delay-150 grayscale hover:grayscale-0 hover:scale-110' src={otherCinemaImg} alt="" />
                                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                                </div>
                            </div>
                            <div className='flex flex-col items-center sm:items-start sm:pl-16'>
                                <p className="text-2xl sm:text-4xl relative group w-fit border-b-2 border-zinc-600 ">
                                    <div className='mb-2'><a className='flex items-center gap-3' target="_blank" rel="noopener noreferrer" href="https://theothercinema.netlify.app/">
                                        The Other Cinema
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>

                                    </div>
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-zinc-500 group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-zinc-500 group-hover:w-1/2 group-hover:transition-all"></span>
                                </p>
                                <div className='sm:mt-4 text-xl sm:text-2xl'>Movie Database App</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start sm:flex-row gap-2'>
                            <div className='w-full max-w-lg'>
                                <div className="group flex justify-center items-center relative cursor-pointer text-4xl overflow-hidden">
                                    <img className='sm:w-max h-auto transition ease-in-out duration-500 delay-150 grayscale hover:grayscale-0 hover:scale-110' src={otherCinemaImg} alt="" />
                                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                                </div>
                            </div>
                            <div className='flex flex-col items-center sm:items-start sm:pl-16'>
                                <p className="text-2xl sm:text-4xl relative group w-fit border-b-2 border-zinc-600">
                                    <div className='mb-2 '>
                                        <a className='flex items-center gap-3' target="_blank" rel="noopener noreferrer" href="https://movieguess.netlify.app/">
                                            Movie Guess
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>

                                    </div>
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-zinc-500 group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-zinc-500 group-hover:w-1/2 group-hover:transition-all"></span>
                                </p>
                                <div className='sm:mt-4 text-xl sm:text-2xl'>Multiplayer Wordle-like web game</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start sm:flex-row gap-2'>
                            <div className='w-full max-w-lg'>
                                <div className="group flex justify-center items-center relative cursor-pointer text-4xl overflow-hidden">
                                    <img className='sm:w-max h-auto transition ease-in-out duration-500 delay-150 grayscale hover:grayscale-0 hover:scale-110' src={otherCinemaImg} alt="" />
                                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                                </div>
                            </div>
                            <div className='sm:pl-16'>
                                <div className='text-2xl sm:text-4xl'>Movie Guess</div>
                                <div className='text-xl sm:text-2xl'>Multiplayer Wordle-like web game</div>
                            </div>
                        </div>
                    </Fade>

                </div>
            </div>
        </div >

    )
}
