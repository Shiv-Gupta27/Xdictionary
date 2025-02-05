import React from "react";
import { useState } from "react";

export default function Searchword (){
    const DictionaryData = 
    [
    
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
    ]

    const [search, setSearchText] = useState("");

    const [defination, setdefination] = useState("");

    const [value,setvalue] = useState(false)
    

    const handleSearch = (e)=>{
        e.preventDefault();
        let valuefound = false
        DictionaryData.map((ele,idx)=>{
            if (ele.word.toLowerCase() === search.toLowerCase()){
                setdefination(ele.meaning);
                setvalue(true);
                valuefound = true
            }
        })

        if (!valuefound){
            setdefination("Word not found in the dictionary.")
        }
    };
    
    return(
        <div>
            <h1>Dictionary App</h1>
            <form action="submit" onSubmit={(e)=>handleSearch(e)}>
                <input type="text" name="searchbox" value={search} onChange={(e)=>setSearchText(e.target.value)} required />
                <button type="submit">Search</button>
            </form>
            <h3>Definition:</h3>{value && search ?<p>{defination}</p>:<>{defination}</>}
        </div>
    )
}