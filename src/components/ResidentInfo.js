import { useEffect, useState } from "react"
import getInfo from "../services/getInfo"

import './ResidentInfo.css'

const ResidentInfo = ({url})=> {

    const [name , setName] = useState('')
    const [urlImage, setUrlImage] = useState('')
    const [status, setStatus] = useState('')
    const [origin, setOrigin] = useState('')
    const [episodes, setEpisodes] = useState(0)
    
    useEffect(()=>{
        getInfo(url)
            .then((resp) => {
                setName(resp.data.name)
                setUrlImage(resp.data.image)
                setStatus(resp.data.status)
                setOrigin(resp.data.origin.name)
                setEpisodes(resp.data.episode.length)
            })
    },[url])


    return(
        <div className="residentInfo">
            <h3>Name: {name}</h3>
            <img src={urlImage} alt="" title={name}/>
            <h4>Status: {status}</h4>
            <h4>Origin: {origin}</h4>
            <h4>Episodes: {episodes}</h4>
        </div>
    )
}

export default ResidentInfo