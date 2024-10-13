import image1 from '../image/truck (1).png'
import image2 from '../image/truck (2).png'
import image3 from '../image/truck (3).png'
import images from '../image/move.png'

function Team(){

    return (
        <div className=''>
             <img src={images} alt={'imagePicture'} className="opacity-5 bg-black h-3/6 sm:block hidden opacity-10 w-full -mb-10"  style={{height:"710px"}} />
             <div className='relative lg:bottom-96 md:bottom-96 pt-1 pb-8 sm:p sm:-translate-y-80 translate-y-5'>
            <h1 className="text-red text-5xl font-bold text-center mt-20 mb-3" data-aos="fade-up">OUR TEAM</h1>
            <p className="sm:text-2xl text-xl text-white text-center" data-aos="fade-right">HIGHLY TRAINED PROFESSIONAL IN</p>
            <div className='grid grid-cols-1 items-center mb-10 lg:mx-52 md:mx-0 mt-10 text-center justify-items-center sm:grid-cols-3 '>
                <div data-aos="flip-right">
                    <img src={image1} alt="" className='w-64 md:w-60  h-64 rounded-xl'/>
                    <p className='text-white font-bold mt-1 mb-3 sm:mb-0' >Moving Techniques</p>
                </div>
                <div data-aos="flip-right">
                    <img src={image2} alt="" className='w-64  h-64 md:w-60  rounded-xl'/>
                    <p className='text-white font-bold mt-1 mb-3 sm:mb-0'>Safety Protocols</p>
                </div>
                <div data-aos="flip-right">
                    <img src={image3} alt="" className='w-64  h-64 md:w-60  rounded-xl'/>
                    <p className='text-white font-bold mt-1 mb-3 sm:mb-0'>Customer Service Standards</p>
                </div>
            </div>
            <p className='w-9/12 text-center mx-auto md:w-12/12 text-white' data-aos="fade-right">Our team comprises highly trained professionals who can handle moves of all sizes, from small apartments to large commercial relocations. Led by our founder and CEO, <span className='text-red'>Joshua</span>, we are committed to excellence in every move. Our staff undergoes rigorous training in moving techniques, safety protocols, and customer service standards to ensure your belongings are handled with the utmost care and professionalism.
           </p>
           <p className="text-sm bg-red w-32 text-white my-4 text-center mx-auto p-2" data-aos="zoom-in">Learn More</p>
           </div>
        </div>
    )
}
export default Team

/*




*/