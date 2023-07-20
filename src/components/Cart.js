
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector,useDispatch} from 'react-redux';
import {remove} from '../store/cartSlice';
const Cart = () => {
    const products=useSelector(state => state.cart);
    
    const dispatch=useDispatch();
    const removeToCart=(id)=>{
        dispatch(remove(id));
    }
    const cards=products.map(product => (
        <div className='col-md-12' style={{marginBottom: '10px'}}> 
          <Card key={products.id} style={{width:'16rem'}} className='h-100 ml-3'>
          <div className='text-center ml-14'>
          <Card.Img variant="top" src={product.image} style={{width: '6rem',height :'9rem'}} />
          </div>
          <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          RS.{product.price}
          </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button onClick={()=>removeToCart(product.id)}>Remove</Button>
          </Card.Footer>
          </Card>
          </div>
      ));
      console.log(cards)
    return(
        <>
        <div className='row'>
           {cards}
        </div>
        </>
    )
}
export default Cart;