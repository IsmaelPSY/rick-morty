import axios  from "axios"

const getInfo = async (url)=> {
    const req = axios.get(url)
    return req
}

export default getInfo