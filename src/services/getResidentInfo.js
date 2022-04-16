import axios  from "axios"

const getResidentInfo = async (url)=> {
    const req = axios.get(url)
    return req
}

export default getResidentInfo