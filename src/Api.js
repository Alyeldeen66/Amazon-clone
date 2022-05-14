import { setPage } from "./JS/CurrentPageReducer";
import { setProducts } from "./JS/ProductsReducer";
export const loadProducts = (page) => (dispatch, getState) =>
  fetch(
    "https://amazon24.p.rapidapi.com/api/product?" +
      new URLSearchParams({
        categoryID: "aps",
        keyword: "iphone",
        country: "US",
        page: String(page),
      }),
    {
      headers: {
        "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
        "X-RapidAPI-Key": "a8ac1ff2edmshb03d28023d16381p147731jsn2764b273dd36",
      },
    }
  )
    .then((res) => res.json())
    .then((products) => {
      console.log(products.docs);
      //dispatch(setProducts(products.docs));
      //dispatch(setPage(page));
    });
