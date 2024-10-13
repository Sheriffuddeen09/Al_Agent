import image from '../image/stockmove.jpeg'

function Stress (){

    return (
        <section className='bg-gray-200 p-6 sm:-mt-96 sm:-translate-y-72 md:-translate-y-80 sm:-mb-80'>
        <div className='flex justify-around flex-wrap sm:flex-nowrap text-white text-center lg:mx-20 -translate-x-3 sm:translate-x-8'>
            <img  src={image} alt='imagepicture' data-aos="zoom-out" className='sm:w-7/12 sm:hidden block' style={{height:"350px"}} />
            <img  src={image} alt='imagepicture' data-aos="zoom-out" className='sm:w-7/12 sm:block hidden' style={{height:"500px"}} />
            <div className='bg-[#3b3b3d] lg:w-9/12 md:w-12/12 py-6 lg:px-5 md:px-1 relative -top-8 sm:top-14 -right-5 sm:right-20'  style={{height:"380px"}}>
                <h1 className='lg:text-4xl text-2xl font-bold' data-aos="zoom-out">What We Represent</h1>
                <h1 className='lg:text-2xl text-xl mt-3' data-aos="zoom-in">Stress-Free Moves, Perfect Clean</h1>
                <p className='mx-auto mt-4 text-sm' data-aos="fade-up">JVEC MOVERS is dedicated to providing top-notch moving and cleaning services. Based in Johnson City, Tennessee, we cater to both local and long-distance relocations, including moves to Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and Washington DC. We specialize in making your moving experience as smooth and stress-free as possible, from packing and transportation to cleaning your new home or office.
               </p>
               <p className="text-sm bg-red w-32 text-white my-4 text-center mx-auto p-2">Learn More</p>

            </div>
        </div>
        </section>
    )
}
export default Stress
