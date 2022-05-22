import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = (props) => {

    const [allProductManagers, setAllProductManagers] = useState([])
    
    const [deleteToggle, setDeleteToggle] = useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/ProductManagers")
            .then(res => {
                // console.log("response: ", res);
                setAllProductManagers(res.data.results);
            })
            .catch(err => {
                console.log("errrrr", err)
            })

    }, [deleteToggle, props.newProductToggle])
    
    const deleteProduct = (id)=>{
        console.log("deleting a Product with this id-->", id)
        axios.delete(`http://localhost:8000/api/ProductManagers/${id}`)
        .then(res=>{
            console.log("res after deleting", res)
            setDeleteToggle(!deleteToggle)
        })
        .catch(err=> console.log(err))
    }


    return (
        <div>
            <h4>Product Manager</h4>
            <div className="cards">
                {
                    allProductManagers.map((productObj, idx) => {
                        return (
                            <div key= {productObj._id} className="card mx-auto mb-2" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                    <h5 className="card-title"><Link className="btn btn-success" to={`/ProductManagers/${productObj._id}`}>{productObj.title} details</Link></h5>
                                    <h6 className="card-subtitle mb-2 text-muted">${productObj.price}</h6>
                                    <p className="card-text">{productObj.description}</p>
                                    {/* <a href="#" className="card-link">Card link</a> */}
                                    {/* <a href="#" className="card-link">Another link</a> */}
                                    {/* <p className='card-text'>Veteran Status: {productObj.isVeteran? "Veteran": "Non-Veteran"}</p> */}
                                    <p><Link to={`/edit/${productObj._id}`} className="btn btn-info" >Edit {productObj.title}</Link></p>
                                    <button onClick = {(e)=>{deleteProduct(productObj._id)}} className="btn btn-danger">Delete {productObj.title} </button>
                                </div>
                            </div>
                        )

                    })
                }

            </div>

        </div>
    );
};



export default AllProducts;