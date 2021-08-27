import classes from "./AvailableMeals.module.css";
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
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
