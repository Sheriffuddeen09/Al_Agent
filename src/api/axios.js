import axios from 'axios'

export const Api = axios.create({
    baseURL:" http://localhost:3500"
})

export const getChoose = async () =>{
    const res = await Api.get('/choose')
    return res.data
}