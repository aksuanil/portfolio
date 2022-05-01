import React from 'react'
import fileSaver from 'file-saver';
import pdf from '../assets/Anil_Aksu_CV.pdf'
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
        <div id="header" className='select-none fixed top-0 backdrop-blur-sm bg-black  transition-all duration-500 bg-opacity-80 h-24 w-full animate-slideInDown animate-slow z-10 '>
            <div className='flex justify-end h-full items-center animate-fadeIn animate-duration-[7s]'>
                <button className='fixed left-0 md:ml-8 lg:ml-12 mt-2 hidden md:block' onClick={() => SmoothVerticalScrolling("hero", 275, "top")}>
                    <svg className='hover:fill-emerald-500 transition-all duration-700' fill="#C8D1D9" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="60px" height="60px" viewBox="0 0 650.000000 650.000000">
                        <g transform="translate(0.000000,505.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M1183 5020 c-564 -61 -1014 -473 -1140 -1042 -17 -78 -18 -165 -18
-1448 0 -1514 -4 -1425 66 -1634 153 -460 567 -804 1047 -870 169 -24 2622
-24 2779 0 206 30 370 93 546 210 321 214 527 560 567 951 8 75 10 505 7 1398
-3 1154 -5 1299 -20 1372 -56 273 -178 505 -363 689 -179 178 -399 298 -650
355 l-99 23 -1325 2 c-729 1 -1358 -2 -1397 -6z m2780 -543 c110 -38 171 -71
254 -134 163 -123 269 -315 294 -528 7 -59 9 -528 7 -1365 -3 -1194 -5 -1279
-22 -1335 -85 -283 -293 -487 -571 -561 -67 -18 -131 -19 -1400 -19 -1501 0
-1378 -6 -1551 80 -200 100 -343 274 -406 492 l-23 78 0 1340 0 1340 23 75
c69 219 201 380 391 479 77 39 187 76 251 84 19 2 629 4 1355 3 l1320 -1 78
-28z"/>
                            <path d="M2337 3982 c-3 -4 -222 -626 -487 -1382 -265 -756 -484 -1378 -487
-1383 -2 -4 103 -7 234 -7 l238 0 359 1028 c197 565 362 1032 365 1039 3 6
168 -456 365 -1028 l359 -1039 235 0 c183 0 233 3 230 13 -3 6 -220 632 -484
1389 l-479 1378 -222 0 c-122 0 -224 -3 -226 -8z"/>
                            <path d="M2256 1948 c-27 -79 -51 -149 -53 -155 -4 -10 71 -13 356 -13 199 0
361 3 360 8 0 4 -23 72 -52 152 l-52 145 -255 3 -255 2 -49 -142z"/>
                        </g>
                    </svg>
                </button>
                <div className='flex justify-end w-full sm:w-4/5 lg:w-3/5 border-b-2 border-zinc-700 overflow-hidden mx-[5vw] '>
                    <div className='flex flex-row justify-evenly sm:justify-between w-full sm:w-5/6 md:w-4/6 lg:w-4/6 text-[5vw] sm:text-2xl'>
                        <button className="relative group sm:h-12" onClick={() => savePdf()}>
                            <span className='flex gap-2 items-center mx-4'> Resume
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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

