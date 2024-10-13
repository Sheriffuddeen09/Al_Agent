import { useEffect, useState } from "react"
import { getChoose } from "../api/axios"

function Client (){

    const [choose, setChoose] = useState([])
    useEffect(() =>{

        getChoose().then(json =>{
            setChoose(json)
            return json
        })
    },[])

    const contentmid = (
        <div className="block lg:hidden" data-aos="zoom-in" >
        <div className="flex scrollb scroll-p-0 mt-10 scroll-smooth scrollbar scrollbar-thumb-gray-50  scrollbar-thin scrollbar-track-white flex-row gap-4 md:gap-10" >
            {
                choose.map((cho) =>(
                    <div className="bg-gray-100 p-4">
                    <h1 className="font-bold mb-2"> {cho.title}</h1>
                    <img alt="imagepic" src={cho.icon} width={110}/>
                    <p className="w-48" style={{fontSize:"13px"}}>{cho.body}</p>
                    </div>
                ))
            }
        </div>
        </div>
        
    )
    const content = (
        <div className=" hidden lg:block" data-aos="zoom-in" >
        <div className="flex scrollb scroll-p-0 mt-10 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white flex-row w-96 lg:w-full justify-center gap-10 ">
            {
                choose.map((cho) =>(
                    <div className="bg-gray-100 p-4">
                    <h1 className="font-bold mb-2"> {cho.title}</h1>
                    <img alt="imagepic" src={cho.icon} width={110}/>
                    <p className="w-48" style={{fontSize:"13px"}}>{cho.body}</p>
                    </div>
                ))
            }
        </div>
        </div>
        
    )
    return(
        <div className="-mt-36">
            <h1 className="text-4xl mb-3 text-gray-700 text-center font-bold">CLIENTS WE SERVE</h1>
            <p className="text-center text-black text-3xl">Our services cater to</p>
            {content}
            {contentmid}
        </div>
    )
}

export default Client