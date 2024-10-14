import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import image from '../image/move.png'
function Move(){

    //use useEffect to give effect to animation(aos) to be effected
    //Aos is an animation dependency for fade, flip and zoom of content
    useEffect(() =>{
        AOS.init({duration: 2000})
    }, [])


    return(
        <div className='flex justify-around py-8 sm:flex-nowrap flex-wrap gap-16 sm:gap-0 -mb-16 lg:mx-16 lg:translate-x-16 items-center'>
        <div className='lg:-translate-y-20 px-2'> 
           <p className="sm:text-6xl text-3xl text-white font-bold cap" data-aos="fade-right"> <span className="text-red">MOVE</span> WITH 
           <br /> CONFIDENCE:</p> 
           <p className="text-white text-3xl mt-2 mb-3 " data-aos="fade-up">Smooth Moves Start Here</p>
           <p className="text-sm text-white mb-2" data-aos="fade-right">Professional and affordable. Fully insured.</p>
           <p className="bg-red p-2 text-white w-28 text-center" data-aos="zoom-out">Get started</p>
        </div>
        <img src={image} alt='imagepicture' className=' lg:block hidden relative -top-8 w-6/12 ' data-aos="flip-right" width={400} height={100} style={{
            height:"550px"
        }} />
        <img src={image} alt='imagepicture' data-aos="flip-right"  className=' lg:hidden block relative -top-8 w-80' width={400} height={100} style={{
            height:"450px"
        }} />
        </div>
    )
}
export default Move
