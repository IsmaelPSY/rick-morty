import { useState,useEffect } from "react"

// Services
import getAllLocations from "../services/getAllLocations"
import getResidentInfo from "../services/getResidentInfo"
import getLocationInfo from "../services/getLocationInfo"

// Components
import LocationContainer from "./LocationContainer"
import ResidentContainer from "./ResidentContainer"

const SearchBox = () => {
    // Generate a random number for the initial location.
    // Locations = 1-126
    const random = Math.floor(Math.random() * 126 + 1);
  
    const [allLocations, setAllLocations] = useState([])
    const [nexPetition, setNextPetition] = useState('https://rickandmortyapi.com/api/location?page=1')
    const [filterValue , setFilterValue] = useState('')
    const [list, setList] = useState([])
    const [urlLocation, setUrlLocation] = useState('')
    const [listUrlResidents, setListUrlResidents] = useState([])
    const [listResidents, setListResidents] = useState([])


    useEffect(()=>{
        if(nexPetition){
            getAllLocations(nexPetition)
            .then((resp)=>{
                setNextPetition(resp.data.info.next)
                setAllLocations(allLocations.concat(resp.data.results))
            })
            .catch(err => {
                console.error(err)
            })
        }
    },[nexPetition,allLocations,random])
    

    useEffect(()=>{
        setList(allLocations.filter((location)=> location.name.toUpperCase().includes(filterValue.toUpperCase())).map((location)=><button key={location.id} onClick={()=>setUrlLocation(location.url)}>{location.name}</button>))
    },[allLocations,filterValue])

    useEffect(()=>{
        if(urlLocation){
            getLocationInfo(urlLocation)
                .then(resp =>{
                    setListUrlResidents(resp.data.residents)
                })
        }
    },[urlLocation])


        listUrlResidents.forEach( url => {
            if(url){
                getResidentInfo(url)
                    .then(resp => {
                        // setListResidents(listResidents.concat(resp.data))
                    })
            }
        })


    console.log(listResidents)

    return (
        <div>
            <input type='text' placeholder='Type a Location' onChange={e => setFilterValue(e.target.value)}></input>
            {
                filterValue ? <div>{list}</div> : null
            }
            <LocationContainer url={urlLocation}/>
            <ResidentContainer url={urlLocation}/>
        </div>

    )
}
export default SearchBox