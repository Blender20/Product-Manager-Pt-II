import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = () => {

    const [allProductManagers, setAllProductManagers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/ProductManagers")
            .then(res => {
                // console.log("response: ", res);
                setAllProductManagers(res.data.results);
            })
            .catch(err => {
                console.log("errrrr", err)
            })

    }, [])


    return (
        <div>
            <h4>Product Manager</h4>
            <div className="cards">
                {
                    allProductManagers.map((productObj, idx) => {
                        return (
                            <div key= {productObj._id} className="card mx-auto mb-2" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                    <h5 className="card-title"><Link to={`/ProductManagers/${productObj._id}`}>{productObj.title}</Link></h5>
                                    <h6 className="card-subtitle mb-2 text-muted">${productObj.price}</h6>
                                    <p className="card-text">{productObj.description}</p>
                                    {/* <a href="#" className="card-link">Card link</a> */}
                                    {/* <a href="#" className="card-link">Another link</a> */}
                                    {/* <p className='card-text'>Veteran Status: {productObj.isVeteran? "Veteran": "Non-Veteran"}</p> */}
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