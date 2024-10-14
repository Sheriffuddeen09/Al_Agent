import image from '../image/imagecut.gif'
import Client from './Client'

function Greograph(){

    return(
        <section className='bg-white p-6 mx-auto sm:-top-16 -top-12 relative' data-aos="zoom-out">
            <h1 className='text-center font-bold text-3xl my-4 sm:my-10 mb-8' data-aos="fade-right" >GEOGRAPHIC COVERAGE </h1>
                <img src={image} alt='imagepicture' width={400} className='sm:w-8/12 w-96 mx-auto relative mt-16'/> 

                <p   className='relative md:bottom-80 md:-translate-y-3 lg:bottom-96 md:left-10 lg:left-64 lg:-translate-y-28 bg-white text-black bottom-52 shadow-md sm:px-6 px-2 py-4 sm:w-96 text-sm w-64 sm:text-xl'><span className='font-bold text-sm sm:text-xl '>LOCAL</span>: Serving the Tri-Cities area and other cities in Tennessee</p>
                <p className='bg-white text-black px-6 sm:shadow-0 shadow-md py-3 lg:w-5/12 md:w-8/12 md:left-44 bottom-52 md:-translate-y-20 text-sm w-72 sm:text-xl relative lg:bottom-96 lg:-translate-y-16 translate-x-5 lg:translate-x-72'><span className='font-bold text-sm sm:text-xl'>LONG-DISTANCE</span>:  Covering moves to Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and Washington DC.</p>
                <Client />
        </section>
    )
}

export default Greograph