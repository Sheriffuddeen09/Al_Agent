import image from '../image/move.png'
function Move(){

    return(
        <div className='flex justify-around py-8 sm:flex-nowrap flex-wrap gap-16 sm:gap-0 -mb-16 lg:mx-16 lg:translate-x-16 items-center'>
        <div className='lg:-translate-y-20'> 
           <p className="sm:text-6xl text-3xl text-white font-bold cap"> <span className="text-red">MOVE</span> WITH 
           <br /> CONFIDENCE:</p> 
           <p className="text-white text-3xl mt-2 mb-3">Smooth Moves Start Here</p>
           <p className="text-sm text-white mb-2">Professional and affordable. Fully insured.</p>
           <p className="bg-red p-2 text-white w-28 text-center">Get started</p>
        </div>
        <img src={image} alt='imagepicture' className=' lg:block hidden -translate-y-8 w-6/12 ' width={400} height={100} style={{
            height:"550px"
        }} />
        <img src={image} alt='imagepicture' className=' lg:hidden block -translate-y-8 w-80' width={400} height={100} style={{
            height:"450px"
        }} />
        </div>
    )
}
export default Move
