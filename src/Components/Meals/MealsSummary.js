import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Ice-Cream, Delivered To You</h2>
      <p>
        Choose your favorite snack from our broad selection of available meals
        and enjoy a delicious snack at home.
      </p>
      <p>
        All our ice-cream meals are made from high-quality ingredients,
        just-in-time and of course by experienced chefs!
      </p>
    </section>
  );
};
export default MealsSummary;
