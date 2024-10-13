
import wheel from '../image/wheel.png'
function Clean(){

    return (

        <section className='bg-white p-8 flex flex-row flex-wrap justify-around items-center '>
            <div className=''>
            <h1 className='uppercase text-3xl font-bold mb-2'>We Move and Clean</h1>
            <h1 className='uppercase text-xl w-96'>Powered by MD Environmental Services | Professional Cleaning Services</h1>
            <p className="text-sm bg-red w-32 text-white my-4 text-center p-2" >Learn More</p>
            </div>
            <div>
                <img src={wheel} alt='imagelogo'/>
            </div>
        </section>

    )
}

export default Clean