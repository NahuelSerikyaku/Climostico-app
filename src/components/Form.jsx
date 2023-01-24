import React, { useState, useEffect } from "react";
import "../assets/Form.css"


const Search = ({newData}) => {
  const [city, setCity] = useState("")
  const [cityOptions, setCityOptions] = useState([])
  const [click, setClick] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(()=>{
      const fechtCity = async () => { 
        const resp = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_KEY}`
        )
        const data = await resp.json()
        const showDataOptions = data.map(
          (cityInfo)=> `${cityInfo.name}, ${cityInfo.country}`
        )
        setCityOptions(showDataOptions)
        console.log(data)
      }
      if(!click && city.length > 2){
        fechtCity()
      } else {
        setCityOptions([])
        setClick(false)
      }

    }, 300)
    
    return ()=> clearTimeout(timeOut)

  },[city])

  

  const handleClick = (clickCity)=>{
    setCity(clickCity)
    setClick(true)
    newData(clickCity)
  }
  
  

  return (
      <div className="search-container">
        <input 
          type="text" 
          className="city-text-box"
          placeholder="Escriba la ciudad"
          value={city}
          onChange={ e => setCity(e.target.value)}
          />

          {cityOptions.length > 0 && (
            <div className="options-container"> 
              {cityOptions.map((option)=>(
                <div className="options" onClick={()=>handleClick(option)} >{option}</div>
              ))}
            </div>
          )}
      </div>
  );
};

export default Search;