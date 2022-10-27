import "./App.css";
import { ProductList } from "./components/ProductList";
import product from "./data/product";
import { useState } from "react";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  const [shoppingList, setShoppingList] = useState([...product]);
  const [shoppingCartList, setShoppingCartList] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  function addToBasket(title, description, price) {
    setShoppingCartList((prevArray) => [
      ...prevArray,
      { title: title, description: description, price: price },
    ]);
    console.log(shoppingList);
    setCartValue(cartValue + price);
  }
  function deleteItem(product) {
    console.log(product);
    console.log(product.id);
    console.log(shoppingCartList);
    console.log(shoppingCartList);

    const indexOfproduct = shoppingCartList.indexOf(product);

    console.log(indexOfproduct);
    console.log(shoppingCartList[indexOfproduct]);

    setShoppingCartList(
      shoppingCartList.filter((item) => {
        return item !== shoppingCartList[indexOfproduct];
      })
    );

    setCartValue(0);
  }

  function deleteAll() {
    setShoppingCartList([]);
    setCartValue(0);
  }

  console.log(product);

  return (
    <div className="app">
      <h1 className="productsList">Lista produktów</h1>
      <div>TODO: lista produktów</div>

      <ProductList product={shoppingList} addToBasket={addToBasket} />

      <h1 className="cart">Koszyk</h1>
      <div>
        TODO: koszyk zakupów <span> cena: {cartValue} $</span>
        <button onClick={deleteAll}>Empty the basket</button>
      </div>

      <ShoppingCart product={shoppingCartList} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
