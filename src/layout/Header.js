import { Link, useLocation } from 'react-router-dom'
import logo from './image/logo.png'
import { useState } from 'react'


 function Header (){

    const [bar, setBar] = useState(false)
    const homepage = useLocation().pathname

    const handleBar = () =>{
        setBar(!bar)
    }

    return (
        <header className='bg-[#282c30] text-white -mt-2 shadow-md '>
                <nav className='flex flex-row items-center justify-between mx-8 lg:justify-evenly md:-mx-0 lg:-mx-0'>
                    <img src={logo} alt='logo' width={80} height={20} className='h-20' />
                    <div className='hidden sm:block'>
                    <ul className='inline-flex lg:gap-16 gap-4'>
                        
                            <Link to={'/home'} className={`${homepage === '/home' ? "home" : "none"}`}>
                            <li className='text-white font-lighter'>Home</li>
                            
                            </Link>
                            <Link to={'/about'} className={`${homepage === '/about' ? "about" : "none"}`}><li className='text-white font-lighter'>About</li></Link>
                            <Link to={'/'} className={`inline-flex gap-1 ${homepage === '/' ? "service" : "none"}`}><li className='text-white font-lighter'>Service</li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-4 translate-y-1 ${homepage === '/' ? "rotate" : "none"}`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                            </Link>
                            <Link to={'/more'} className={`inline-flex gap-1 ${homepage === '/more' ? "more" : "none"}`}><li className='text-white font-lighter'>More</li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-4 translate-y-1 ${homepage === '/more' ? "rotate" : "none"}`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            </Link>
                            <Link to={'/contact'} className={`${homepage === '/contact' ? "contact" : "none"}`}><li className='text-white font-lighter'>Contact</li></Link>
                       
                    </ul>
                    </div>
                    <div className='hidden sm:block'>
                    <span className='inline-flex lg:gap-10 gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                        <a href='tel:0814-097-9054' className='underline hover:text-blue-600'>0814-097-9054</a>
                        <p className='py-1 px-3 bg-red-600'>Free Quote</p>
                    </span>

                    </div>
            <div className='sm:hidden block'>
            <div className='inline-flex gap-3 items-center'>
            <p className='py-1 px-3 bg-red-600'>Free Quote</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" onClick={handleBar} stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </div>
            </div>

                </nav>
                <div onClick={handleBar} className={`bg-hover w-full h-full fixed top-0 sm:hidden block ${bar ? "block" : "hidden"} `}>
                    <div className='bg-white text-black z-10 w-72 md:w-96 md:translate-x-96 h-full p-8 translate-x-28 font-bold'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mb-6" onClick={handleBar}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <ul className='flex flex-col font-bold md:gap-12 gap-8'>
                        
                        <Link to={'/'}><li className='text-black font-lighter'>Home</li></Link>
                        <Link to={'/'}><li className='text-black font-lighter'>About</li></Link>
                        <Link to={'/'}><li className='text-black font-lighter'>Service</li></Link>
                        <Link to={'/'}><li className='text-black font-lighter'>More</li></Link>
                        <Link to={'/'}><li className='text-black font-lighter'>Contact</li></Link>
                   
                </ul>
                <div className='block sm:hidden'>
                    <span className='flex-col flex gap-6 mt-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                        <a href='tel:0814-097-9054' className='underline hover:text-blue-600'>0814-097-9054</a>
                    </span>

                    </div>
                    </div>
                </div>
        </header>
    )

}

export default Header