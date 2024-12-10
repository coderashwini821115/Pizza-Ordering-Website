import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import OrderPizza from "./OrderPizza";
import BuildUrPizza from "./BuildUrPizza";
import ShoppingCart from "./ShoppingCart";
import SuccessPage from "./SuccessPage";
// import OrderPlace
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/orderPizza",
        element: <OrderPizza />,
      },
      {
        path: "/buildPizza",
        element: <BuildUrPizza />,
      },
      {
        path: "/shoppingCart",
        element: <ShoppingCart />,
      },
      { path: "/success", element: <SuccessPage /> },
    ],
  },
]);
export default Router;
