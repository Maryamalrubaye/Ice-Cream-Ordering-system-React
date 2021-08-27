import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Ice Cream ",
    description: "Powder Variety of Flavors Custom",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Frozen Pineapple",
    description: "Ice Cream Good Taste!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Freeze-Dried Fruit",
    description: "Fd Cranberry Dice for Yogurt/Cake/Ice Cream",
    price: 12.99,
  },
  {
    id: "m4",
    name: "King Creamer",
    description: "Non Machine Ice Cream Powder",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem
     id={meal.id}
    key= {meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price}/>);

  return (
    <section className={classes.meals}>
    <Card>
      <ul>{mealsList}</ul>
      </Card>  
    </section>
  );
};

export default AvailableMeals;
