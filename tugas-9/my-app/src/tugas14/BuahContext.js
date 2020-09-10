import React, { useState, createContext } from "react";
import axios from "axios"


export const BuahContext = createContext();

export const BuahProvider = props => {
    const [DataBuah, setDataBuah] = useState(null)
    const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})

    useEffect( () => {
        if (DataBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDataBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
          })
        }
      }, [DataBuah]);
    
    
    return (
        < BuahContext.Provider value={[DataBuah, setDataBuah, input, setInput]}>
          {props.children}
        </ BuahContext.Provider>
      );
    };
    


