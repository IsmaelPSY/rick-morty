const LocationInfo = ({name,type,dimension,residents}) => {
    return (
        <div>
            <h4>Name : {name}</h4>
            <h4>Type: {type}</h4>
            <h4>Dimension: {dimension}</h4>
            <h4>Residents: {residents}</h4>
        </div>
    )
}

export default LocationInfo