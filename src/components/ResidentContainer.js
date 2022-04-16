import { useEffect, useState } from "react"
import getLocationInfo from "../services/getLocationInfo"

import ResidentInfo from "./ResidentInfo"

import getResidentInfo from "../services/getResidentInfo"

const ResidentContainer = ({url}) => {

    
    // const [listResidents, setListResidents] = useState([])
    // const [listUrlResidents, setListUrlResidents] = useState([])
    // const [nameResident, setNameResident] = useState('')
    // const [urlImage, setUrlImage] = useState('')
    // const [originResident, setOriginResident] = useState('')
    // const [statusResident, setStatusResident] = useState('')
    // const [episodesResidents, setEpisodesResidents] = useState(0)

    // useEffect(()=>{
    //     if(url){
    //     getLocationInfo(url)
    //         .then((resp)=>{
    //             setListUrlResidents(resp.data.residents)
    //         })
    //     }
    // },[url])

    // useEffect(()=>{     
    //    listUrlResidents.forEach((url)=>{
    //         getResidentInfo(url)
    //             .then(resp => {
    //                 console.log(resp.data)
    //             })
    //    })
    // },[listUrlResidents,listResidents])

    
    // useEffect(()=>{
    //     setListResidens(listUrlResidents.map((urlResident)=>{
    //         getResidentInfo(urlResident)
    //             .then((resp)=>{
    //                 console.log(resp.data)
    //                 setNameResident(resp.data.name)
    //                 // setUrlImage(resp.data.image)
    //                 // setOriginResident(resp.data.origin.name)
    //                 // setStatusResident(resp.data.status)
    //                 // setEpisodesResidents(resp.data.episode.length)
    //             })
    //         return <h1>hola</h1> 
    //         // <ResidentInfo key={nameResident} name={nameResident}/>
    //     // return <ResidentInfo key={urlResident} name={nameResident} urlImage={urlImage} status={statusResident} origin={originResident} episodes={episodesResidents}/>
    //     }))
    // },[episodesResidents,nameResident,originResident,statusResident,listResidents,urlImage,listUrlResidents])

    return(
        <div>
            {/* {listResidents} */}
        </div>
    )
}

export default ResidentContainer