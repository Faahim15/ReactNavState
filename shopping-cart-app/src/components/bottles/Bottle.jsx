
import './bottle.css';
const Bottle = ({bottle,handleShoppingCart}) => { 
     const {image,name,price} =bottle;
    
    return (
        <div className="bottle">
            <h4>{name}</h4>
            <img src={image}alt="img not found" />
            <p>Price: ${price}</p>
            <button onClick={()=> handleShoppingCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;