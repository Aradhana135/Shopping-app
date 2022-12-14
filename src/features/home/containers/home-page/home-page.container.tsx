import React from "react";
import Basket from "../../../basket/containers/basket/basket.container";
import TotalPrice from "../../../basket/containers/total-price/total-price.container";
import Products from "../../../products/containers/products/products.container";
import HomePageLayout from "../../components/home-layout/home-layout.component";
import "./home-page.container.scss";

export default function HomePage(): JSX.Element {
  return (
    <HomePageLayout
      header={
        <img
          className="logo"
          alt="Vitl"
          src="https://image.shutterstock.com/image-vector/fast-shopping-icon-creative-shop-600w-1911542005.jpg"
        
        
        />
      }
      products={<Products />}
      basket={<Basket />}
      total={<TotalPrice />}
    />
  );
}
