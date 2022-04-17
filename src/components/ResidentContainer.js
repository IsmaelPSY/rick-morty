import { useEffect, useState } from "react"

import ResidentInfo from "./ResidentInfo"

import './ResidentContainer.css'


import getInfo from "../services/getInfo"

const ResidentContainer = ({url}) => {

  const [profile, setProfile] = useState([])
    
  useEffect(()=>{
    if (url){
    getInfo(url)
        .then((res) => {
            setProfile(res.data.residents)
        })
    }
},[url])

  const listResidents = profile.map((item)=><ResidentInfo key={item} url={item}/>)

    return(
        <div className="residentContainer">
            {listResidents}
        </div>
    )
}

export default ResidentContainer