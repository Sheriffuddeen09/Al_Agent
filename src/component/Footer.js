import logo from '../image/logo.png'
import what from '../image/whatsa.png'
import faceb from '../image/faceb.png'
function Footer (){

    //use content1 for Desktop mode
    //use contents for pad mode
    //use contentd for mobile mode
    const contentl =(
        <div className='flex flex-row flex-wrap  justify-around'>
        <div className='text-white' style={{fontSize:"11px"}}>
            <img src={logo} alt='logo' className='w-40 -translate-x-8'/>
            <p className=''>Copyright &copy; 2024</p>
            <p className=''>JVEC Movers. All Rights</p>
            <p className=''>Reserved.</p>
            <p className='mt-6'>Book Now -</p>
            <p className=''>Schedule Your Move</p>
            <p className="text-sm bg-red w-24 text-white my-2 text-center p-2" style={{fontSize:"11px"}}>Free Quote</p>
           </div> 
           <div className='text-white'  style={{fontSize:"11px"}}>
            <p className='mt-6 text-red font-bold mb-2'>SERVICES</p>
            <p className='mb-2 text-gray-500'>Residential Moving</p>
            <p className='mb-2'>Complete Packing</p>
            <p className='mb-2'>Loading and Unloading</p>
            <p className='mb-2'>Transportation</p>
            <p className='mb-2'>Unpacking Services</p>
            <p className='mb-2'>Commercial Moving</p>
            <p className='mb-2'>Office and Business Relocations</p>
            <p className='mb-2'>Packing and Transportation</p>
            <p className='mb-2'>Setup Services</p>
            <p className='mb-2 text-gray-500'>Specialty Moves</p>
            <p className='mb-2'>Delicate Items</p>
            <p className='mb-2'>Heavy Furniture</p>
            <p className='mb-2 text-gray-500'>Cleaning Services</p>
            <p className='mb-2'>Post-Move Cleaning</p>
            </div>

            <div style={{fontSize:"11px"}} className='text-white'>
            <p className='mt-6 text-red font-bold mb-2' >QUICK LINKS</p>
            <p className='mb-2'>About Us</p>
            <p className='mb-2'>FAQ</p>
            <p className='mb-2'>Blog</p>
            <p className='mb-2'>Terms of Service</p>
            <p className='mb-2'>SiteMaps</p>
            <p className='mb-2'>Schedule Your Move</p>
           
            </div>
            
           
            <div style={{fontSize:"11px"}} className='text-white'>
            <p className='mt-14 lg:mt-6 text-red font-bold mb-2 uppercase'>CONTACT US</p>
            <p className='mt-3 w-32'>12 Rev. Oguniyi Street, off Oba Akinjobi, ikeja GRA, Lagos, Nigeria.</p>
            <p className='mt-2 mb-2 underline'>Phone: +234-0814-097-9054</p>
            <p className='mb-2 underline'>Email: hello@jvecmovers.com</p>
            <p className='mt-6 font-bold text-red  mb-2 uppercase'>Follow Us</p>
            <p className='mt-3 w-44'>Stay connected with us on social media for updates and promotions.</p>
            <div className='inline-flex  gap-2 -translate-x-6'>
                <span className='inline-flex items-center'><img src={what} alt='logo' className='w-16' />
                <p className='-translate-x-4'>WhatsApp</p>
                </span>
                <span className='inline-flex items-center gap-2'><img src={faceb} alt='logo' className='w-5 h-5' />
                <p className=''>Facebook</p>
                </span>
            </div>
        </div>
           
        
</div>
    )
    const contentd = (
        <div className='flex flex-col  justify-center mx-auto items-center text-white' style={{fontSize:"11px"}}>
            <img src={logo} alt='logo' className='w-40 '/>
            <p className=''>Copyright &copy; 2024</p>
            <p className=''>JVEC Movers. All Rights</p>
            <p className=''>Reserved.</p>
            <p className='mt-6'>Book Now -</p>
            <p className=''>Schedule Your Move</p>
            <p className="text-sm bg-red w-24 text-white my-2 text-center p-2" style={{fontSize:"11px"}}>Free Quote</p>
            <p className='mt-6 text-red font-bold mb-2'>SERVICES</p>
            <p className='mb-2 text-gray-500'>Residential Moving</p>
            <p className='mb-2'>Complete Packing</p>
            <p className='mb-2'>Loading and Unloading</p>
            <p className='mb-2'>Transportation</p>
            <p className='mb-2'>Unpacking Services</p>
            <p className='mb-2'>Commercial Moving</p>
            <p className='mb-2'>Office and Business Relocations</p>
            <p className='mb-2'>Packing and Transportation</p>
            <p className='mb-2'>Setup Services</p>
            <p className='mb-2 text-gray-500'>Specialty Moves</p>
            <p className='mb-2'>Delicate Items</p>
            <p className='mb-2'>Heavy Furniture</p>
            <p className='mb-2 text-gray-500'>Cleaning Services</p>
            <p className='mb-2'>Post-Move Cleaning</p>
            <p className='mt-6 text-red font-bold mb-2' >QUICK LINKS</p>
            <p className='mb-2'>About Us</p>
            <p className='mb-2'>FAQ</p>
            <p className='mb-2'>Blog</p>
            <p className='mb-2'>Terms of Service</p>
            <p className='mb-2'>SiteMaps</p>
            <p className='mb-2'>Schedule Your Move</p>
            <p className='mt-14 lg:mt-6 text-red font-bold mb-2 uppercase'>CONTACT US</p>
            <p className='mt-3 w-32'>12 Rev. Oguniyi Street, off Oba Akinjobi, ikeja GRA, Lagos, Nigeria.</p>
            <p className='mt-2 mb-2 underline'>Phone: +234-0814-097-9054</p>
            <p className='mb-2 underline'>Email: hello@jvecmovers.com</p>
            <p className='mt-6 font-bold text-red  mb-2 uppercase'>Follow Us</p>
            <p className='mt-3 w-44'>Stay connected with us on social media for updates and promotions.</p>
            <div className='inline-flex  gap-2 -translate-x-3'>
                <span className='inline-flex items-center'><img src={what} alt='logo' className='w-16' />
                <p className='-translate-x-4'>WhatsApp</p>
                </span>
                <span className='inline-flex items-center gap-2'><img src={faceb} alt='logo' className='w-5 h-5' />
                <p className=''>Facebook</p>
                </span>
            </div>
        
</div>
    )

    const contents = (
        <div className='flex flex-row flex-wrap  justify-around'>
        <div>
        <div className='text-white' style={{fontSize:"11px"}}>
            <img src={logo} alt='logo' className='w-40 -translate-x-8'/>
            <p className=''>Copyright &copy; 2024</p>
            <p className=''>JVEC Movers. All Rights</p>
            <p className=''>Reserved.</p>
            <p className='mt-6'>Book Now -</p>
            <p className=''>Schedule Your Move</p>
            <p className="text-sm bg-red w-24 text-white my-2 text-center p-2" style={{fontSize:"11px"}}>Free Quote</p>
           </div> 
          
          <div style={{fontSize:"11px"}} className='text-white'>
            <p className='mt-6 text-red font-bold mb-2' >QUICK LINKS</p>
            <p className='mb-2'>About Us</p>
            <p className='mb-2'>FAQ</p>
            <p className='mb-2'>Blog</p>
            <p className='mb-2'>Terms of Service</p>
            <p className='mb-2'>SiteMaps</p>
            <p className='mb-2'>Schedule Your Move</p>
            <p className='mt-6 font-bold text-red  mb-2 uppercase'>Follow Us</p>
            <p className='mt-3 w-44'>Stay connected with us on social media for updates and promotions.</p>
            <div className='inline-flex  gap-2 -translate-x-6'>
                <span className='inline-flex items-center'><img src={what} alt='logo' className='w-16' />
                <p className='-translate-x-4'>WhatsApp</p>
                </span>
                <span className='inline-flex items-center gap-2'><img src={faceb} alt='logo' className='w-5 h-5' />
                <p className=''>Facebook</p>
                </span>
            </div>
            </div>
            </div>
           <div>
           <div className='text-white'  style={{fontSize:"11px"}}>
            <p className='mt-6 text-red font-bold mb-2'>SERVICES</p>
            <p className='mb-2 text-gray-500'>Residential Moving</p>
            <p className='mb-2'>Complete Packing</p>
            <p className='mb-2'>Loading and Unloading</p>
            <p className='mb-2'>Transportation</p>
            <p className='mb-2'>Unpacking Services</p>
            <p className='mb-2'>Commercial Moving</p>
            <p className='mb-2'>Office and Business Relocations</p>
            <p className='mb-2'>Packing and Transportation</p>
            <p className='mb-2'>Setup Services</p>
            <p className='mb-2 text-gray-500'>Specialty Moves</p>
            <p className='mb-2'>Delicate Items</p>
            <p className='mb-2'>Heavy Furniture</p>
            <p className='mb-2 text-gray-500'>Cleaning Services</p>
            <p className='mb-2'>Post-Move Cleaning</p>
            </div>
            <div style={{fontSize:"11px"}} className='text-white'>
            <p className='mt-14 lg:mt-6 text-red font-bold mb-2 uppercase'>CONTACT US</p>
            <p className='mt-3 w-32'>12 Rev. Oguniyi Street, off Oba Akinjobi, ikeja GRA, Lagos, Nigeria.</p>
            <p className='mt-2 mb-2 underline'>Phone: +234-0814-097-9054</p>
            <p className='mb-2 underline'>Email: hello@jvecmovers.com</p>
            
        </div>
        </div>
        
</div>
    )
    return (
       <div>
        <div className='lg:block hidden'>
        {contentl}
        </div>
        <div className='md:block hidden'>
        {contents}
        </div>
        <div className='block sm:hidden'>
        {contentd}
        </div>
       </div>
    )
}

export default Footer