// Getting all locations
import axios from "axios";

const getAllLocations = async (URL) => {
    const req = axios.get(URL)
    return req
}

export default getAllLocations