import { useEffect, useState } from "react"
import { getTruck } from "../api/axios"
import vehicle from '../image/vehicle.png'

function Relocation (){

    const [truck, setTruck] = useState([])
    useEffect(() =>{

        getTruck().then(json =>{
            setTruck(json)
            return json
        })
    },[])

    const contentmid = (
        <div className="block sm:hidden ">
            <div className="flex flex-row gap-5 text-white mt-10">
                    <div className=" border">
                    <img alt="imagepic" src={vehicle} width={110} className="w-72 h-40"/>
                    <h1 className="text-sm text-gray-400 mb-2 px-4">JULY 10,2024 </h1>
                    <p className="w-48 px-4" style={{fontSize:"13px"}}>Settling into a new home: Strategies for an effortless movement , hassle free.</p>
                    <p className="text-sm bg-red w-32 text-white px-4 my-2 text-center translate-x-4 p-2">Read More</p>
                    </div>
                    <div className=" border">
                    <img alt="imagepic" src={vehicle} width={110} className="w-72 h-40"/>
                    <h1 className="text-sm text-gray-400 mb-2 px-4">JULY 10,2024 </h1>
                    <p className="w-48 px-4" style={{fontSize:"13px"}}>Settling into a new home: Strategies for an effortless movement , hassle free.</p>
                    <p className="text-sm bg-red w-32 text-white px-4 my-2 text-center translate-x-4 p-2">Read More</p>
                    </div>
                    <div className=" border">
                    <img alt="imagepic" src={vehicle} width={110} className="w-72 h-40"/>
                    <h1 className="text-sm text-gray-400 mb-2 px-4">JULY 10,2024 </h1>
                    <p className="w-48 px-4" style={{fontSize:"13px"}}>Settling into a new home: Strategies for an effortless movement , hassle free.</p>
                    <p className="text-sm bg-red w-32 text-white px-4 my-2 text-center translate-x-4 p-2">Read More</p>
                    </div>
            </div>
        </div>
        
    )
    const content = (
        <div className=" hidden sm:block text-white mb-8">
        <div className="flex mt-10 justify-center gap-10 ">
            {
                truck.map((cho) =>(
                    <div className=" border">
                    <img alt="imagepic" src={cho.icon} width={110} className="w-52 h-40"/>
                    <h1 className="text-sm text-gray-400 mb-2 px-4"> {cho.title}</h1>
                    <p className="w-48 px-4" style={{fontSize:"13px"}}>{cho.body}</p>
                    <p className="text-sm bg-red w-32 text-white px-4 my-2 text-center translate-x-4 p-2">{cho.learn}</p>
                    </div>
                ))
            }
        </div>
        </div>
        
    )
    return(
        <div className="mt-0 ">
            <h1 className="text-4xl mb-3 text-white text-center text-sm text-gray-400" data-aos="zoom-out">THE SMOOTH MOVE BLOG</h1>
            <p className="sm:text-center text-white w-72 sm:w-5/12 mx-auto text-2xl" data-aos="fade-right">MOVING AND  RELOCATION TIPS AND EVERYTHING IN BETWEEN</p>
            <p className="text-center text-white w-72 sm:w-4/12 mx-auto mt-7" style={{fontSize:"10px"}} data-aos="fade-out">Check out our blog for helpful tips and guides on making your move as smooth as possible/. Topics include packing tips, moving checklists, and more.</p>
            {content}
            {contentmid}
        </div>
    )
}

export default Relocation