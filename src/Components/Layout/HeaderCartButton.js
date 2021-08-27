import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};
export default HeaderCartButton;
