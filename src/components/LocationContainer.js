import { useEffect, useState } from 'react';

import getInfo from '../services/getInfo';

// Components
import LocationInfo from './LocationInfo';

const LocationContainer = ({url}) => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [dimension, setDimension] = useState('')
    const [residents , setResidents] = useState(0)
    

    useEffect(()=>{
        if (url){
        getInfo(url)
            .then((res) => {
                setName(res.data.name)
                setType(res.data.type)
                setDimension(res.data.dimension)
                setResidents(res.data.residents.length)
            })
        }
    },[url])

    

    return (
        <div>
            <LocationInfo 
            name = {name}
            type = {type}
            dimension = {dimension}
            residents = {residents}
            />
        </div>
    )
}

export default LocationContainer;