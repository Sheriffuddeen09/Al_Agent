import image from '../image/imagecut.gif'

function Greograph(){

    return(
        <section className='bg-white p-6 mx-auto'>
            <h1 className='text-center font-bold'>GEOGRAPHIC COVERAGE </h1>
                <img src={image} alt='imagepicture' width={400} className='w-8/12 mx-auto'/> 
        </section>
    )
}

export default Greograph