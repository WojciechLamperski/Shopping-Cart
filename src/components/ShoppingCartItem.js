export const ShoppingCartItem = (props) => {
  return (
    <div>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
      <h5>{props.product.price} $</h5>
      <button
        onClick={() => {
          props.deleteItem(props.product);
        }}
      >
        Delte
      </button>
    </div>
  );
};
