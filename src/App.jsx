import AddProduct from "./features/products/AddProduct";
import ProductsView from "./features/products/ProductsView";

const App = () => {
  return (
    <div>
      <h1>Redux Tool Kit</h1>
      <AddProduct></AddProduct>
      <ProductsView></ProductsView>
    </div>
  );
};

export default App;