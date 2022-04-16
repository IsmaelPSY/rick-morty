import axios from "axios";

const getLocationInfo = async (url) => {
    const req = axios.get(url)
    return req
}

export default getLocationInfo