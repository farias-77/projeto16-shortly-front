import { useEffect, useState } from "react";
import axios from "axios";

export default function Ranking(){
    
    const [ ranking, setRanking ] = useState([]);

    useEffect(() => {

        const url = "https://projeto16-shortly-farias-77.herokuapp.com/ranking";

        const promise = axios.get(url);
        
        promise.then((response) =>{
            setRanking(response.data);
        });

        promise.catch(() => {
            console.log("Erro interno no servidor, por favor aguarde.");
        })

    }, []);

    return <></>
}