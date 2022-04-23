import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { productsSearch } from "./JS/ProductsReducer";
import Product from "./Product";
import "./Home.css";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { loadProducts } from "./Api";
import { setPage } from "./JS/CurrentPageReducer";
const Home = () => {
  const productsList = useSelector((state) => state.products.value);
  const filteredProducts = useSelector((state) => state.filteredproducts.value);
  const search = useSelector((state) => state.products.search);
  const currentPage = useSelector((state) => state.currentpage);
  const dispatch = useDispatch();
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
          src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg"
        />

        <div style={{ paddingTop: 170 }} className="home_row">
          {!search &&
            productsList.map((product) => (
              <Product
                key={product.product_id}
                id={product.product_id}
                img={product.product_main_image_url}
                title={product.product_title}
                text={product.text}
                price={product.app_sale_price}
                rating={product.evaluate_rate}
              />
            ))}
          {search &&
            filteredProducts.map((product) => (
              <Product
                key={product.product_id}
                id={product.product_id}
                img={product.product_main_image_url}
                title={product.product_title}
                text={product.text}
                price={product.app_sale_price}
                rating={product.evaluate_rate}
              />
            ))}
        </div>
        <div className="home_container">
          {/* <Button
            onClick={() => {
              if (currentPage > 0) dispatch(loadProducts(currentPage - 1));
              console.log(currentPage);
            }}
          >
            prev
          </Button>
          <Button
            onClick={() => {
              dispatch(loadProducts(currentPage + 1));
              console.log(currentPage);
            }}
          >
            next
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
