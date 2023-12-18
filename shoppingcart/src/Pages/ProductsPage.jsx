import Products from "../Components/Products";

const ProductsPage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "2%" }}>Welcomr to our Shop</h1>

      <h1 style={{ marginBottom: "1%" }}>All products</h1>
      <Products></Products>
    </>
  );
};

export default ProductsPage;
