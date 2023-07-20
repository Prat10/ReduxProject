import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch,useSelector} from 'react-redux';
import {add} from '../store/cartSlice';
import {getProduct} from'../store/productSlice';
const Product = ()=>{
const dispatch=useDispatch();
const {data: products}=useSelector(state=> state.products);
    useEffect(()=>{
        dispatch(getProduct());
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(result => setProducts(result))
    },[]);
    const addToCart=(product)=>{
        //dispatch an add action
        dispatch(add(product));
    }
    const cards=products.map(product => (
      <div className='col-md-3' style={{marginBottom: '10px'}}> 
        <Card key={product.key} style={{width:'16rem'}} className='h-100 ml-3'>
        <div className='text-center'>
        <Card.Img variant="top" src={product.image} style={{width: '6rem',height :'9rem'}} />
        </div>
        <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          RS.{product.price}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick={()=> addToCart(product)}>ADD TO CART</Button>
        </Card.Footer>
        </Card>
        </div>
    ))
    return (
        <>
        <h1 className='text-center'>Product DashBoard</h1>
         <div className='row'>
            {cards}
         </div>
        </>
    )
}

export default Product;