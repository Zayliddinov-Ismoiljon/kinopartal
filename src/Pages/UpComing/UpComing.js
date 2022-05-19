import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../Component/MovieCard/MovieCard";

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

    const styles={
        width:"1440px",
        margin:"0 auto",
        display:"flex",
        flexWrap:"wrap",
        // alignItems:"center", 
        justifyContent:"space-between",
        padding:"20px"
    }

    return(
        
        <div style={styles}>
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