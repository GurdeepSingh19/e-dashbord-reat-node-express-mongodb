import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = ()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [category,setCategory] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async ()=>{
        
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
             }
        });
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async ()=>{

        console.warn(name,price,category,company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: "put",
            body: JSON.stringify({name,price,category,company}),
            headers:{
                "Content-type":"application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/');

    }

    return(
        <div className='product'>
            <h1>Update Product</h1>

            <input className='inputBox' type='text' placeholder='Enter Product Name'
            onChange={(e)=>{setName(e.target.value)}} value={name}/>

            <input className='inputBox' type='text' placeholder='Enter Product Price'
            onChange={(e)=>{setPrice(e.target.value)}} value={price}/>

            <input className='inputBox' type='text' placeholder='Enter Product Category'
            onChange={(e)=>{setCategory(e.target.value)}} value={category}/>

            <input className='inputBox' type='text' placeholder='Enter Product Company'
            onChange={(e)=>{setCompany(e.target.value)}} value={company}/>

            <button onClick={updateProduct} className='appButton'>Update Product</button>

        </div>
    )
}

export default UpdateProduct;