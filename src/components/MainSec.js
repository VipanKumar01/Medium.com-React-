import React from 'react'

function MainSec() {
    return (
        <>
            <div class="myherosec p-5 bg-[#ffc017] flex flex-col md:flex-row border-b-[1px] border-black">
                <div class="md:w-6/12  mt-[7vw] ml-[10%]">
                    <h1 id="hero-heading" class="herosec md:text-8xl text-5xl mb-5">Stay curious.</h1>
                    <h1 class="herosec text-xl mb-7" id="hero-heading">Discover stories, thinking, and expertise from
                        writers on any
                        topic.</h1>
                    <button class="herosec  bg-black text-white rounded-3xl px-7 py-2">Start Reading</button>
                </div>
                <div class="md:w-6/12 w-full top-0 object-cover">
                    <img class="herosecimg" src="assets/M.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default MainSec