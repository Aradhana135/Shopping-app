import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Basket = React.lazy(
  () => import("../features/basket/containers/basket/basket.container")
);

const Products = React.lazy(
    () => import("../features/products/containers/products/products.container")
  );

export default function Routess(): JSX.Element {
  return (
    <>
    <Routes>
      <Route path="/" >
        <Suspense fallback={<div>Loading ... </div>}>
          <Products />
        </Suspense>
      </Route>
      <Route path="/basket" >
        <Suspense fallback={<div>Loading ... </div>}>
          <Basket />
        </Suspense>
      </Route>
    </Routes>
    </>
  );
}
