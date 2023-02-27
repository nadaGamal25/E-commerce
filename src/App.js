import './App.css';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import Home from './Components/mainPage/Home';
import Cart from './Components/cart/Cart';
import { CartProvider } from 'react-use-cart';
import { useThemeHook } from './Components/ThemeProvider';

function App() {
  const [theme] =useThemeHook();

  let routers=createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true, element:<CartProvider><Home/></CartProvider>},
      {path:'/cart', element:<CartProvider><Cart/></CartProvider>}
    ]}
  ])

  return (
    <>
    <RouterProvider router={routers}/>
    </>
  );
}

export default App;
