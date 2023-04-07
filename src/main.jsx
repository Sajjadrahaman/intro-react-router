import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Error-Page/ErrorPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Default from './components/Default/Default';
import Friends from './components/Friends/Friends';
import FreindsDetail from './components/FriendDetail/FreindsDetail';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
  },
  {
    path: "/about",
    element: <About></About>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
    errorElement: <ErrorPage></ErrorPage>,
  }
]); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Default></Default>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path: "friend/:friendId",
        element: <FreindsDetail></FreindsDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`),
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "*",
        element: <div>Not Found 404!!</div>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
