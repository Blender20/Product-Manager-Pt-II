import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios';
import {useHistory} from "react-router-dom";


const OneProduct = () => {

    const { _id } = useParams();
    //Initialize useHistory into a variable.
    const history = useHistory();
    
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
    // By clicking on the button i want it make it a request to the backend to delete something based on the id.
    
    //delete Product
    const deleteProduct = ()=>{
        // console.log("deleting!!")
        axios.delete(`http://localhost:8000/api/ProductManagers/${_id}`)
        .then(res=>{
            console.log("res-->", res)
            history.push("/")
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <h3>Title: {ProductManagerInfo.title}</h3>
            <h4>Price: $ {ProductManagerInfo.price}</h4>
            <p><em>Description: </em>{ProductManagerInfo.description}</p>
            {/* <h5>Veteran Status: {ProductManagerInfo.isVeteran? "Veteran": "Non-Veteran"}</h5> */}
            <button onClick={deleteProduct} className="btn btn-danger">Delete {ProductManagerInfo.title}</button>
        </div>
    );
};



export default OneProduct;