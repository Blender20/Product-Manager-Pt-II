import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios';
const OneProduct = () => {

    const { _id } = useParams();
    
    //state variable to store the one Product information we get back from the api call
    const [ProductManagerInfo, setProductManagerInfo] = useState({})
    
    // useEffect prevents from Multi-page call back
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/ProductManagers/${_id}`)
        .then(res=>{
            console.log(res);
            setProductManagerInfo(res.data.results);
        })
        .catch(err=>console.log(err))
    },[])
    
    
    
    return (
        <div>
            <h3>Title: {ProductManagerInfo.title}</h3>
            <h4>Price: $ {ProductManagerInfo.price}</h4>
            <p><em>Description: </em>{ProductManagerInfo.description}</p>
            {/* <h5>Veteran Status: {ProductManagerInfo.isVeteran? "Veteran": "Non-Veteran"}</h5> */}
        </div>
    );
};



export default OneProduct;