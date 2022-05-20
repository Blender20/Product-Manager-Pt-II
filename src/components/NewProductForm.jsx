import React, {useState} from 'react';
import axios from 'axios';// to talk to the database

const NewProductForm = () => {


    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    // let [gradDate, setGradDate] = useState("");
    // let [isVeteran, setIsVeteran] = useState(false);
    
    //state variable to store validation errors inside of
    let [errors, setErrors] = useState({})
    
    
    
    
    //submit handler
    const addProduct = (e)=>{
        e.preventDefault();
        
        // package up the state variables into an object
        let formInfo = {title, price, description}//, gradDate, isVeteran}
        
        axios.post("http://localhost:8000/api/ProductManagers", formInfo)
            .then(res=>{
                console.log("response after posting form", res)
                console.log(res.data.error.errors)
                // If statement means if there are errors and there are validation errors we need to save, then save those validation errors into state.
                if(res.data.error){
                
                    setErrors(res.data.error.errors); 
                }
                // else means there are no errors, then we can clear out the form
                else{
                //clear out the state variables to clear out the form
                setTitle("");
                setPrice("");
                setDescription("");
                // setGradDate("");
                // setIsVeteran(false);
                }
                
            })
            .catch(err=>console.log("error", err))
    }
    

    return (
        <div>
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange ={(e)=>setTitle(e.target.value)} className="form-control" value={title} />
                    {/* <p className="text-danger">{errors.title? errors.title.message: null}</p> */}
                    <p className="text-danger">{errors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" onChange ={(e)=>setPrice(e.target.value)} className="form-control" value={price} />
                    <p className="text-danger">{errors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" onChange ={(e)=>setDescription(e.target.value)} className="form-control" value={description} />
                    <p className="text-danger">{errors.description?.message}</p>
                </div>
                    {/* <div className="form-group">
                    <label htmlFor="">Date:</label>
                    <input type="date" onChange ={(e)=>setGradDate(e.target.value)} className="form-control" value={gradDate} />
                    <p className="text-danger">{errors.gradDate?.message}</p>
                </div> */}
                    {/* <div className="form-group">
                    <label htmlFor="">Check if Veteran:</label>
                    <input type="checkbox" onChange ={(e)=>setIsVeteran(e.target.checked)} className="form-check-input" value={isVeteran} />
                    <p className="text-danger">{errors.isVeteran?.message}</p>
                </div> */}
                <input type="submit" value="Add Product" className="btn btn-success mt-2" />
            </form>
        </div>
    );
};



export default NewProductForm;