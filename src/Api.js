import { setPage } from "./JS/CurrentPageReducer";
import { setProducts } from "./JS/ProductsReducer";
export const loadProducts = (page) => (dispatch, getState) =>
  fetch(
    "https://amazon24.p.rapidapi.com/api/product?" +
      new URLSearchParams({
        categoryID: "aps",
        keyword: "iphone",
        country: "US",
        page: { page },
      }),
    {
      headers: {
        "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
        "X-RapidAPI-Key": "e1a81ef54fmsh8bec51c6ebc04e8p15dd61jsne228d0be410e",
      },
    }
  )
    .then((res) => res.json())
    .then((products) => {
      console.log(products.docs);
      // dispatch(setProducts(products.docs));
    });
