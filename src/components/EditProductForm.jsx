import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';

const EditProductForm = () => {

    const {_id} = useParams();
    
    const [productInfo, setProductInfo] = useState({})
    // initialize history so we can redirect using history.push()
    const history = useHistory();
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ProductManagers/${_id}`)
        .then(res=>{
            console.log("res-->", res)
            setProductInfo(res.data.results);
        })
        .catch(err=>console.log(err))
    }, [])
    
    const changeHandler = (e)=>{
        
        if(e.target.type == "checkedbox"){
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.value
            })
        }
    }
    
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ProductManagers/${_id}`, productInfo)
            .then(res=>{
                console.log(res)
                history.push("/")// redirect after updating form
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Edit Products: {_id}</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" onChange= {changeHandler} className="form-control" value={productInfo.title}/> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" name="price" onChange= {changeHandler} className="form-control" value={productInfo.price}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" onChange= {changeHandler} className="form-control" value={productInfo.description}/>
                </div>
                    {/* <div className="form-group">
                    <label htmlFor="">Date:</label>
                    <input type="date" onChange ={changeHandler} className="form-control" value={productInfo.gradDate} />
                    <p className="text-danger">{errors.gradDate?.message}</p>
                </div> */}
                    {/* <div className="form-group">
                    <label htmlFor="">Check if Veteran:</label>
                    <input type="checkbox" name="isVeteran" onChange={changeHandler} className="form-check-input" checked={productInfo.isVeteran} />
                </div> */}
                <input type="submit" value="Update Product" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default EditProductForm;