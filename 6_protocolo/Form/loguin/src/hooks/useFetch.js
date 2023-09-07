import { useEffect, useState } from "react";

export const useFetch = async(url) =>{
    const [data,setDada] = useState(null);

    useEffect(async()=>{
        const fetchData = async ()=>{
            const res = await fetch(url);
            const json = await res.json();
            setDada(json);
        }
        fetchData();
    },[url])

    return {data}
}