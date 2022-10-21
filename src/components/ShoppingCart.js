import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCart = (props) => {
  return (
    <div>
      {props.product.map((product) => {
        return (
          <ShoppingCartItem
            product={product}
            deleteItem={props.deleteItem}
          ></ShoppingCartItem>
        );
      })}
    </div>
  );
};
