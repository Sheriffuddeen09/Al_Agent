import customer from '../image/customer.png'
import track from '../image/trac.png'
import service from '../image/servi.png'
import compete from '../image/compete.avif'
function Choose (){

    //use const content to make my code more easy to read
    

    const content = (
        <div className="flex flex-row justify-around flex-wrap" data-aos="zoom-out">
            <div>
                    <div>
                        <div className='inline-flex gap-2' data-aos="zoom-out" >
                            <img src={customer} alt="logo" width={30} height={30}  className='w-8 h-8 rounded-full'/>
                        <span>
                        <h1 className=" font-bold">Exceptional</h1>
                        <h1 className=" font-bold">Customer Service</h1>
                        </span>
                        </div>
                        <h1 className="text-sm w-56 my-2">We prioritize customer satisfaction by offering friendly, professional service. Our team is dedicated to making your moving experience as stress-free as possible</h1>
                    </div>
                    <div className="h-0.5 w-60 bg-gray-600 my-4"></div>
                    <div>
                    <div className='inline-flex gap-2'>
                            <img src={compete} alt="logo" width={30} height={30}  className='w-8 h-8 rounded-full'/>
                        <span>
                        <h1 className=" font-bold">Competitive</h1>
                        <h1 className=" font-bold">Pricing</h1>
                        </span>
                        </div>
                        <h1 className="text-sm w-56 my-2">We offer competitive rates for our services without compromising on quality. Get a high-value service at a price that fits your budget.</h1>
                    </div>
            </div>
            <div className="w-0.5 h-72 bg-gray-600 my-4 sm:block hidden"></div>
            <div className="h-0.5 w-60 bg-gray-600 my-4 block sm:hidden"></div>

            <div>
                    <div>
                    <div className='inline-flex gap-2'>
                            <img src={track} alt="logo" width={30} height={10}  className='w-8 h-8 rounded-full'/>
                        <span>
                        <h1 className=" font-bold">GPS</h1>
                        <h1 className=" font-bold">Tracking</h1>
                        </span>
                        </div>
                        <h1 className="text-sm w-56 my-2">We provide real-time tracking of your belongings, giving you peace of mind during the moving process.</h1>
                    </div>
                    <div className="h-0.5 w-60 bg-gray-600 my-4"></div>
                    <div>
                    <div className='inline-flex gap-2'>
                            <img src={service} alt="logo" width={30} height={30} className='w-8 h-8 rounded-full'/>
                        <span>
                        <h1 className=" font-bold">Comprehensive</h1>
                        <h1 className=" font-bold">Services</h1>
                        </span>
                        </div>
                        <h1 className="text-sm w-56 my-2">In addition to moving, we provide cleaning services to ensure your new space is spotless and ready for you to move in.</h1>
                    </div>
            </div>
        </div>
    )

    return(
        <div className="bg-gradient-to-t from-green-50 to-white p-2">
                <h1 className="text-3xl font-bold text-gray-600 my-4 text-center" data-aos="fade-up">WHY CHOOSE US</h1>
                <p className=" font-bold text-black my-4 text-center" data-aos="fade-right">YOUR PERSONALIZED MOVING SOLUTION</p>
                <p style={{fontSize:"9px",
                    width:"370px"
                }} className=" font-bold mx-auto text-black text-center" data-aos="zoom-out">Our mission is to provide stress-free, efficient, and courteous moving and cleaning services, ensuring seamless transitions for both residential and commercial clients. Explore our services and see how we can make your next move effortless.</p>
                <p className="text-sm bg-red w-32 text-white my-4 text-center mx-auto p-2" >Learn More</p>
        <div className="shadow-md border border-gray-50 rounded-xl mx-auto my-5 p-2 lg:w-7/12 md:w-11/12 ">
            {content}
        </div>

        </div>
    )
}

export default Choose
