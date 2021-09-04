import React, { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const foodPrice = `₹${props.foodPrice}`;

  const addItemToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.foodName,
      amount: amount,
      price: props.foodPrice,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.foodName}</h3>
        <div className={classes.description}>{props.foodDescription}</div>
        <div className={classes.price}>{foodPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
