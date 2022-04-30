import React from 'react'
import fileSaver from 'file-saver';
import pdf from './assets/Anil_Aksu_CV.pdf'
export default function Header() {

    //function for saving file
    const savePdf = () => {
        console.log(process.env.PUBLIC_URL)
        fileSaver.saveAs(
            // "http://localhost:3000/static/media/Anil_Aksu_CV.12cb92702ed5d3672510.pdf",
            process.env.PUBLIC_URL + pdf,
            "Anil_Aksu_CV.pdf"
        );
    };

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.height = "5rem";
        } else {
            document.getElementById("header").style.height = "6rem";
        }
    }

    // const scrollTo = (id) => {
    //     debugger
    //     const violation = document.getElementById(id);
    //     window.scrollTo({
    //         behavior: 'smooth',
    //         top: (violation.offsetTop) - 90,
    //     });
    // };

    function SmoothVerticalScrolling(e, time, where) {
        let elem = document.getElementById(e);
        var eTop = elem.getBoundingClientRect().top;
        var eAmt = eTop / 100;
        var curTime = 0;
        while (curTime <= time) {
            window.setTimeout(SVS_B, curTime, eAmt, where);
            curTime += time / 100;
        }
    }

    function SVS_B(eAmt, where) {
        if (where === "center" || where === "")
            window.scrollBy(0, eAmt / 2);
        if (where === "top")
            window.scrollBy(0, eAmt);
    }

    return (
        <div id="header" className='fixed top-0 backdrop-blur-sm bg-black  transition-all duration-500 bg-opacity-80 h-24 w-full animate-slideInDown animate-slow z-10 '>
            <div className='flex justify-end h-full items-center animate-fadeIn animate-duration-[7s]'>
                <div className='flex justify-end w-full sm:w-4/5 lg:w-3/5 border-b-2 border-zinc-700 overflow-hidden mx-[5vw] '>
                    <div className='flex flex-row justify-evenly sm:justify-between w-full sm:w-5/6 md:w-4/6 lg:w-4/6 text-[5vw] sm:text-2xl'>
                        <button className="relative group sm:h-12" onClick={()=> savePdf()}>
                            <span className='flex gap-2 items-center mx-4'> Resume
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </span>
                            <span className="absolute left-0 -bottom-1 w-full h-[0.00001px] bg-zinc-700 -z-10 duration-500 hover:duration-700 group-hover:h-full group-hover:transition-all"></span>
                        </button>
                        <button className="relative group px-4" onClick={() => SmoothVerticalScrolling("works", 275, "top")}>
                            <span>Works</span>
                            <span className="absolute left-0 -bottom-1 w-full h-[0.00001px] bg-zinc-700 -z-10 duration-500 hover:duration-700 group-hover:h-full group-hover:transition-all"></span>
                        </button>
                        <button className="relative group px-4" onClick={() => SmoothVerticalScrolling("contact", 275, "top")}>
                            <span>Contact</span>
                            <span className="absolute left-0 -bottom-1 w-full h-[0.00001px] bg-zinc-700 -z-10 duration-500 hover:duration-700 group-hover:h-full group-hover:transition-all"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

