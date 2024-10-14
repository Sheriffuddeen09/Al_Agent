import axios from 'axios'

export const Api = axios.create({
    baseURL:"https://company-json.onrender.com"
})
//use axios to fetch data from backend source

//and await to get the main source from the Api

export const getChoose = async () =>{
    const res = await Api.get('/choose')
    return res.data
}

export const getTruck = async () =>{
    const res = await Api.get('/truck')
    return res.data
}