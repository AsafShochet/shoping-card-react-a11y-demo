import { Navigate, useRoutes } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import ContextFilter from "./components/Context/ContextFilter";
import ContextProvider from "./components/Context/ContextProvider";
import Details from "./components/Details/Details";
import FavoritePage from "./components/Favorite/FavoritePage";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Coupons from "./components/Coupons/Coupons";

function App() {
  let router = useRoutes([
    { path: "/", element: <Products /> },
    { path: "/product/:id", element: <Details /> },
    { path: "/favorite", element: <FavoritePage /> },
    { path: "/basket", element: <Basket /> },
    { path: "/coupons", element: <Coupons /> },
    { path: "*", element: <Navigate to={"/"} /> }
  ]);
  return (
    <ContextProvider>
      <ContextFilter>
        <Header />
        {router}
      </ContextFilter>
    </ContextProvider>
  );
}

export default App;
