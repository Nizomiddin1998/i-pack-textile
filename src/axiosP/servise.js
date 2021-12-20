import axios from 'axios';

export function doGet(){
    return  axios.get('http://104.248.138.99/api/result', {
        headers: {
            "Content-Type": "application/json"
        }}).then(res=>{
        return res.data
    })
}
export function doPost(data){
    return  axios.post('http://104.248.138.99/api/contact', data, {
        headers: {
            "Content-Type": "application/json"
        }}).then(res=>{
        return res.data
    })
}