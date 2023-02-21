import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../Component/MovieCard/MovieCard";
import './upcoming.css'

const UpComing=()=>{

    const [movie, setMovie]= useState({
        isFetched: false,
        data:{},
        error:null,
    })

    useEffect(()=>{
        axios.get(process.env.REACT_APP_MOVIE_API + "/movie/now_playing",{
            params:{
                api_key: process.env.REACT_APP_MOVIE_API_KEY
            }
        }).then(function(response){
            setMovie({
                isFetched:true,
                data:response.data,
                error:false
            })
        }).catch(function(error){
            setMovie({
                isFetched:true,
                data:{},
                error:false
            })
        });
    },[])


    return(
        
        <div className='upcoming-body'>
        {
            movie.isFetched ? (
                movie.data.results.map(item=><MovieCard key={item.id} obj={item}/>)
            ):(
                <h2>Loading...</h2>
            )
        }
        </div>
    )
}

export default UpComing;