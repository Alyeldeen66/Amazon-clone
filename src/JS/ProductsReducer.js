import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone 13 Pro (128GB, Silver) [Locked] + Carrier Subscription",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/617FFRO3vcL._AC_UY218_.jpg",
        app_sale_price: "999.00",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B09G9J9ZLB",
        evaluate_rate: "5.0 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "2022 Apple iPhone SE (64 GB, (Product) RED) [Locked] + Carrier Subscription",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/61A0Zu4K-TL._AC_UY218_.jpg",
        app_sale_price: "429.00",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09V4651JX",
        product_id: "B09V4651JX",
        evaluate_rate: "4.0 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone 11, US Version, 128GB, Black - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/61QP7Aocu8S._AC_UY218_.jpg",
        app_sale_price: "398.00",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B07ZPKR714",
        evaluate_rate: "4.4 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone 8, US Version, 64GB, Silver - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/61-LFcsxvwL._AC_UY218_.jpg",
        app_sale_price: "156.95",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B07756QYST",
        evaluate_rate: "3.0 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone X, US Version, 256GB, Silver - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/51JfpF86sPL._AC_UY218_.jpg",
        app_sale_price: "259.90",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B081TJ7B88",
        evaluate_rate: "4.2 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title: "Apple iPhone 12 Mini, 64GB, Black - Verizon (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/71xxiNOjBlL._AC_UY218_.jpg",
        app_sale_price: "404.95",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B08PP5KLV8",
        evaluate_rate: "4.4 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone 11 Pro, 64GB, Space Gray - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/61rDecG7fdL._AC_UY218_.jpg",
        app_sale_price: "453.00",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B07ZPKZSSC",
        evaluate_rate: "4.4 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title: "Apple iPhone 7, 32GB, Black - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/51BpIT9RYbL._AC_UY218_.jpg",
        app_sale_price: "123.95",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B01N4R20RS",
        evaluate_rate: "4.2 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone 8 Plus, US Version, 64GB, Silver - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/71dB7uhUKoL._AC_UY218_.jpg",
        app_sale_price: "229.99",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B07YYM9J4L",
        evaluate_rate: "4.4 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title: "Apple iPhone XS, 64GB, Silver - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/61hBc3oHjyL._AC_UY218_.jpg",
        app_sale_price: "289.54",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B07K4VCLLK",
        evaluate_rate: "4.3 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone XR, US Version, 64GB, White - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/41ZjUOH6nRL._AC_UY218_.jpg",
        app_sale_price: "256.95",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B07P978C2R",
        evaluate_rate: "4.5 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple Iphone X, 256GB, Space Gray - Fully Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/719knfTwPvL._AC_UY218_.jpg",
        app_sale_price: "265.95",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B07758RMKD",
        evaluate_rate: "4.2 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title: "Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/71Rr2Jm7xCL._AC_UY218_.jpg",
        app_sale_price: "498.00",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B08PNM1LNZ",
        evaluate_rate: "4.3 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title: "Apple iPhone 13, 128GB, Midnight - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/61BUt5ZErdL._AC_UY218_.jpg",
        app_sale_price: "774.97",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B09LNW3CY2",
        evaluate_rate: "4.5 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone 12 Pro Max, 512GB, Pacific Blue - Unlocked (Renewed Premium)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY218_.jpg",
        app_sale_price: "1,079.00",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B09JFGT21S",
        evaluate_rate: "4.2 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone SE (2nd Generation), 64GB, Red - Unlocked (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/81sxc08B2QL._AC_UY218_.jpg",
        app_sale_price: "217.20",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B088N8TF64",
        evaluate_rate: "4.5 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title: "Apple iPhone X, 64GB, Silver - For T-Mobile (Renewed)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/61ostgLaUcL._AC_UY218_.jpg",
        app_sale_price: "234.95",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B07RV48RR1",
        evaluate_rate: "4.3 out of 5 stars",
      },
      {
        isBestSeller: false,
        product_title:
          "Apple iPhone 12 Pro, 128GB, Graphite - Unlocked (Renewed Premium)",
        product_main_image_url:
          "https://m.media-amazon.com/images/I/61kYwdMmD-L._AC_UY218_.jpg",
        app_sale_price: "809.00",
        app_sale_price_currency: "$",
        isPrime: true,
        product_detail_url: "https://www.amazon.com/dp/B09G9J9ZLB",
        product_id: "B09JF5ZHQS",
        evaluate_rate: "4.3 out of 5 stars",
      },
    ],
    search: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
    productsSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { setProducts, productsSearch } = productsSlice.actions;
