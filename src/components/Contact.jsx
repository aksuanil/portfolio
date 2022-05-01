import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='flex justify-center w-full' id='contact'>
                <div className='flex flex-col mb-8 w-10/12'>
                    <div className='flex sm:my-6 mb-4 justify-center sm:justify-start'>
                        <div className='text-3xl sm:text-5xl first-letter:text-7xl font-Aldrich select-none'>CONTACT</div>
                    </div>
                    <div className="block bg-gradient-to-r from-transparent via-zinc-600 to-transparent w-full bg-[length:80%_2px] bg-no-repeat bg-center pb-[6px]" />
                    <div className='flex flex-col gap-8 sm:gap-12 text-center sm:text-left'>
                        <div class="w-full md:w-[48rem] md:max-w-full">
                            <div class="p-6 sm:rounded-md">
                                <form name="contact" data-netlify="true">
                                    <label class="block mb-6">
                                        <span>Your name</span>
                                        <input
                                            type="text"
                                            name="name"
                                            class="

                                                    p-2
                                                    block
                                                    w-full
                                                    mt-1
                                                    !border-zinc-900
                                                    !border-2
                                                    shadow-sm
                                                    focus:ring-opacity-80
                                                    text-emerald-100
                                                    font-medium
                                                    bg-zinc-900
                                                    autofill:border-zinc-900 autofill:shadow-fill-zinc-900 autofill:text-fill-white
                                                    focus:outline-none focus:border-emerald-700 focus:ring-emerald-700  rounded-sm sm:text-sm focus:ring-1
                                                    "
                                            placeholder="Your Name"
                                        />
                                    </label>
                                    <label class="block mb-6">
                                        <span>Email address</span>
                                        <input
                                            name="email"
                                            type="email"

                                            class=" p-2
                                                    block
                                                    w-full
                                                    mt-1
                                                    shadow-sm
                                                    !border-2
                                                    !border-zinc-900
                                                    bg-zinc-900
                                                    text-emerald-100
                                                    focus:ring-opacity-80
                                                    autofill:border-zinc-900 autofill:shadow-fill-zinc-900 autofill:text-fill-white 
                                                    focus:outline-none focus:border-emerald-700 focus:ring-emerald-700  rounded-sm sm:text-sm focus:ring-1

                                                "
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </label>
                                    <label class="block mb-6">
                                        <span>Message</span>
                                        <textarea
                                            name="message"
                                            class="
                                                    block
                                                    w-full
                                                    p-2
                                                    bg-zinc-900
                                                    shadow-sm
                                                    text-emerald-100
                                                    focus:ring-opacity-80
                                                    mt-1 px-3 py-2 focus:outline-none focus:border-emerald-700 focus:ring-emerald-700  rounded-sm sm:text-sm focus:ring-1
                                                    
                                                "
                                            rows="3"
                                            placeholder="Your message"
                                        ></textarea>
                                    </label>
                                    <div class="mb-6">
                                        <button
                                            type="submit"
                                            class="
                                                    h-10
                                                    px-5
                                                    text-indigo-100
                                                    bg-emerald-800
                                                    rounded-lg
                                                    transition-all
                                                    duration-150
                                                    focus:shadow-outline
                                                    hover:bg-emerald-700  
                                                    border-4
                                                    border-transparent
                                                    hover:border-4   
                                                    hover:border-emerald-900
                                                "
                                        >
                                            Let's Talk !
                                        </button>
                                    </div>
                                    <div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="block bg-gradient-to-r from-transparent via-zinc-600 to-transparent w-full bg-[length:80%_2px] bg-no-repeat bg-center pb-[6px]" />
                </div>
            </div>
        </>
    )
}
