import React from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";
import { useState, useEffect } from "react";

function GifListContainer (){
    const[gif, setGif] = useState([])
    const[search, setSearch] = useState("")
    //   My generated API key to a variable
    const myApiKey= "9YZgKhgDCkBRsWVJqAN44Y8Erae5NX8C";

    // fire a function to begin with.
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${myApiKey}&rating=g`)
        .then(response => response.json())
        .then(({data}) => {
            const gifs = data.slice(0,3).map((gif)=>({url: gif.images.original.url }));
            setGif(gifs);
        })
        
    // pass the search variable.
    }, [search])


    return(
        <>
            <GifSearch search={setSearch} />
            <GifList gifs={gif}/>
        </>
    )
}

export default GifListContainer;