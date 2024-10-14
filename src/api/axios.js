import axios from 'axios'

export const Api = axios.create({
    //baseURL:"http://localhost:3500"
    baseURL:"https://company-json.onrender.com"
})

export const getChoose = async () =>{
    const res = await Api.get('/choose')
    return res.data
}

export const getTruck = async () =>{
    const res = await Api.get('/truck')
    return res.data
}