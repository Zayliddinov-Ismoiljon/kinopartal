import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "axios";


const Person=()=>{

    const [person, setPerson]=useState({
        isFetched:false,
        data:{},
        error:null
    })

    const params=useParams()

    useEffect(()=>{
        axios.get(process.env.REACT_APP_MOVIE_API + "/person/"+ params.id,{
            params:{
                api_key: process.env.REACT_APP_MOVIE_API_KEY
            }
        }).then(function(response){
            console.log(response);
            setPerson({
                isFetched:true,
                data:response.data,
                error:false
            })
        }).catch(function(error){
            // console.log(error);
            setPerson({
                isFetched:true,
                data:{},
                error:false
            })
        });
    })


    return(
        <div>
            {
                person.isFetched?(
                    <h1 style={{color:"red"}}>{person.data.name}</h1>
                ):(
                    <h1>Loading</h1>
                )
            }
        </div>
    )
}

export default Person;