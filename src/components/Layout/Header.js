import classes from './Header.module.css';
import React, { Fragment } from 'react';
import mealsImage from '../../components/assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodE</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of Kolhapuri food!' />
      </div>
    </Fragment>
  );
};

export default Header;
