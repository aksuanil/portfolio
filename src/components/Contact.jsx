import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { Dialog, Transition } from '@headlessui/react'


const SERVICE_ID = "service_x7k24e9";
const TEMPLATE_ID = "template_zdfbrku";
const PUBLIC_KEY = "zrPkTOnVVqCeIIqBf";

function progressBar() {
    let progress = -5;
    let invervalSpeed = 25;
    let incrementSpeed = 1;
    let bar = document.getElementById("bar");
    let progressInterval = setInterval(function () {
        progress += incrementSpeed;
        bar.style.width = progress + "%";
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, invervalSpeed);
};



export default function Contact() {
    let [isOpen, setIsOpen] = useState(false)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                setTimeout(() => progressBar(), 200)
                setTimeout(() => closeModal(), 3200)
            }, (error) => {
            });
        e.target.reset()
        openModal();
        const inputs = document.querySelectorAll('#name, #email, #message');

        inputs.forEach(input => {
            input.value = '';
        });
    };
    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <div>
            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto mx-8">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        className="text-xl font-medium my-2 text-emerald-400 text-center">
                                        Your message has been sent !
                                    </Dialog.Title>
                                    <div className="block bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-full bg-[length:80%_1px] bg-no-repeat bg-center pb-[6px]" />

                                    <div className="mt-2">
                                        <p className="text-md text-gray-400 text-center my-6">
                                            I will return your message at my earliest convenience.
                                            <br />
                                            Thank you!
                                        </p>
                                    </div>
                                    <div id='bar' name='contact' className="bg-emerald-700 h-3 fixed bottom-0 left-0" style={{ width: "0%" }}></div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="absolute right-0 top-0 px-2 py-2 text-emerald-500 hover:text-emerald-800"
                                            onClick={closeModal}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <div className="block bg-gradient-to-r from-transparent via-zinc-600 to-transparent w-full bg-[length:80%_2px] bg-no-repeat bg-center pb-[6px]" />

            <div className='flex justify-center w-full' id='contact'>
                <div className='flex flex-col mb-8 w-10/12'>
                    <div className='flex sm:my-6 mb-4 justify-center sm:justify-start'>
                        <div className='text-3xl mt-8 sm:text-5xl first-letter:text-7xl font-Aldrich select-none'>CONTACT</div>
                    </div>
                    <div className='flex flex-col gap-8 sm:gap-12 text-center sm:text-left'>
                        <div className="w-full md:w-[48rem] md:max-w-full">
                            <div className="p-6 sm:rounded-md">
                                <form name="contact" action="#" onSubmit={handleOnSubmit}>
                                    <label className="block mb-6">
                                        <span>Your name</span>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="
                                
                                                    p-2
                                                    block
                                                    w-full
                                                    mt-1
                                                    !border-zinc-900
                                                    !border-2
                                                    shadow-sm
                                                    focus:ring-opacity-80
                                                    text-white
                                                    font-medium
                                                    bg-zinc-900
                                                    autofill:border-zinc-900 autofill:shadow-fill-zinc-900 autofill:text-fill-white
                                                    focus:outline-none focus:border-emerald-700 focus:ring-emerald-700  rounded-sm sm:text-sm focus:ring-1
                                                    "
                                            placeholder="Your Name"
                                            required
                                        />
                                    </label>
                                    <label className="block mb-6">
                                        <span>Email address</span>
                                        <input
                                            name="email"
                                            id="email"
                                            type="email"

                                            className=" p-2
                                                    block
                                                    w-full
                                                    mt-1
                                                    shadow-sm
                                                    !border-2
                                                    !border-zinc-900
                                                    bg-zinc-900
                                                    text-white
                                                    focus:ring-opacity-80
                                                    autofill:border-zinc-900 autofill:shadow-fill-zinc-900 autofill:text-fill-white 
                                                    focus:outline-none focus:border-emerald-700 focus:ring-emerald-700  rounded-sm sm:text-sm focus:ring-1

                                                "
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </label>
                                    <label className="block mb-6">
                                        <span>Message</span>
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="
                                                    block
                                                    w-full
                                                    p-2
                                                    bg-zinc-900
                                                    shadow-sm
                                                    text-white
                                                    focus:ring-opacity-80
                                                    mt-1 px-3 py-2 focus:outline-none focus:border-emerald-700 focus:ring-emerald-700  rounded-sm sm:text-sm focus:ring-1 
                                                "
                                            rows="3"
                                            placeholder="Your message"
                                            required
                                        ></textarea>
                                    </label>
                                    <div className="mb-6">
                                        <button
                                            type="submit"
                                            className="
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
        </div>
    )
}
