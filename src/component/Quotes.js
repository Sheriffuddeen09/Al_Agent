import jfc from '../image/logo.png'
import play from '../image/play.png'
import store from '../image/store.png'
function Quotes(){

    const content = (
        <div className='mx-auto'>
            <div className='bg-black flex flex-row flex-wrap items-center opacity-72 justify-around p-3'>
                <h1 className='uppercase text-white font-bold' data-aos="fade-right">download the app</h1>
                <div className='flex flex-wrap sm:flex-nowrap items-center' data-aos="fade-up">
                    <img src={play} alt='imagepic'  className='h-16'/>
                    <img src={store} alt='imagepic' className='h-16'/>
                </div>
            </div>
        </div>
    )
    return(
        <section>
        <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-5 -mt-6 justify-around p-10 bg-free">
            <div>
                <h1 className="uppercase w-64 my-6 text-2xl text-white" data-aos="flip-right">Ready for a Stressless Move? Get your Free Quote </h1>
                <p className="text-white w-64 " data-aos="flip-up" style={{fontSize:"12px"}}>Fill out our online booking form to schedule your move with JVEC MOVERS. Provide details about your move, and we’ll get back to you with a customized plan and quote,</p>
            </div>

            <div  data-aos="fade-up">
                <div className="inline-flex lg:gap-36 gap-20 items-center md:gap-20 ">
                <h1 className="icon sm:text-5xl text-3xl  bg-transparent">Free Quote </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 mt-2 icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <div className="w-12/12 bg-red h-0.5 mt-10"></div>
            </div>
        </div>
        {content}
        </section>
    )
}

export default Quotes

/*

*/