import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { slider } from '../data/data'
import { useState } from 'react'

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)


    const handleClick = (direction) => {
        if (direction == 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <main className='overflow-hidden bg-light-pink relative w-full h-screen flex bg-coral ' >
            {/* left arrow */}
            <div onClick={() => handleClick('left')} className='arrowLeft z-[10] absolute top-0 bottom-0 m-auto md:left-[12px] sm:left-[8px] left-[4px] cursor-pointer opacity-50 w-[2.5rem] h-[2.5rem] bg-light-gray200 rounded-full flex justify-center items-center ' ><ArrowLeftOutlined /></div>

            {/* wrapper */}
            <div style={{ transform: `translateX(${slideIndex * -100}vw)` }} className={`wrapper flex items-center h-full transition-all duration-[1500] `} >
                {
                    slider.map((slide, index) => (
                        <div key={index} className={`slide md:px-0 px-[2rem] bg-[${slide.bg}] flex items-center w-screen h-screen `} >
                            {/* image */}
                            <div className='imageContainer hidden md:flex justify-center flex-1 h-full ' >
                                <img src={slide.img} className='image h-[80%] ' />
                            </div>
                            {/* info */}
                            <div className='infoContainer flex-1 md:p-[3rem] sm:p-[1rem] flex flex-col items-start gap-[2.5rem] ' >
                                <h1 className='md:text-[64px] sm:text-[56px] text-[46px] md:text-start text-center font-semibold ' >{slide.title}</h1>
                                <p className='text-[20px] font-medium tracking-[3px] md:text-start text-center ' >{slide.description}</p>
                                <div className='flex md:justify-start justify-center items-center w-full'>
                                    <button className='p-[10px] text-[20px] cursor-pointer bg-transparent border-[2px] border-black ' >SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>


            {/* right arrow */}
            <div onClick={() => handleClick('right')} className='arrowRight z-[10] absolute top-0 bottom-0 m-auto md:right-[12px] sm:right-[8px] right-[4px] cursor-pointer opacity-50 w-[2.5rem] h-[2.5rem] bg-light-gray200 rounded-full flex justify-center items-center ' ><ArrowRightOutlined /></div>

        </main>
    )
}

export default Slider;