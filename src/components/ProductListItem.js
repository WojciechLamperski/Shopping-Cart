export const ProductListItem = (props) => {
  return (
    <div>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
      <h5>{props.product.price} $</h5>
      <button
        onClick={() => {
          props.addToBasket(
            props.product.title,
            props.product.description,
            props.product.price
          );
        }}
      >
        Add to basket
      </button>
    </div>
  );
};

// title, description, price
