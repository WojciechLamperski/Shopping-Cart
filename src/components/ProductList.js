import { ProductListItem } from "./ProductListItem";

export const ProductList = (props) => {
  return (
    <div>
      {props.product.map((product) => {
        return (
          <ProductListItem
            product={product}
            addToBasket={props.addToBasket}
          ></ProductListItem>
        );
      })}
    </div>
  );
};
