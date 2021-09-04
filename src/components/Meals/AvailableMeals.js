import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    foodName: 'Chicken Rassa Thali',
    foodDescription:
      'Chicken Fry + Chicken Masala + Egg Wati + Tambda & Pandhara Rassa + Choice Of Chapatis (3)/ Bhakri (2) + Biryani.',
    foodPrice: 200.0,
  },
  {
    id: 'm2',
    foodName: 'Mutton Rasa Thali',
    foodDescription:
      'Mutton + Tambda & Pandhara Rassa + Choice Of Chapatis (3)/ Bhakri (2) + Biryani Rice + 1 Wati Dahikanda.',
    foodPrice: 200.0,
  },
  {
    id: 'm3',
    foodName: 'Egg Thali',
    foodDescription:
      'Egg Masala + Tambada Rassa + Pandhara Rassa + Choice Of Chapatis (3)/ Bhakri (2) + Rice + 1 Wati Dahikanda.',
    foodPrice: 150.0,
  },
  {
    id: 'm4',
    foodName: 'Veg Thali',
    foodDescription: 'Mix veg sabji, 2 chapati, rice, papad, salad.',
    foodPrice: 100,
  },
];

const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      foodName={meal.foodName}
      foodDescription={meal.foodDescription}
      foodPrice={meal.foodPrice}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
