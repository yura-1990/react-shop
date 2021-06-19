import React, {useState, useEffect} from "react"

export default function Ajax() {

    const [city, setCity] = useState()
    
    const convert = async () => {
        const response = await fetch("http://ip-api.com/json/")
        const country =  await response.json()
        setCity(country.country)
    }
    
    useEffect(convert)  
    
    return ( 
        <>
            <h1 className="country">Country: {city}</h1> 
        </>
    )
}