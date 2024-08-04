import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./routes/homePage/homepage.jsx"
import ListPage from "./routes/listPage/listpage.jsx";
import { Layout,  RequireAuth } from "./routes/layout/layout.jsx";
import SinglePage from "./routes/SinglePage/singlepage.jsx";
import ProfilePage from "./routes/profilePage/profilepage.jsx";
import RegisterPage from "./routes/registerPage/register.jsx";
import LoginPage from "./routes/loginPage/login.jsx";
import UpdatePage from "./routes/updatePage/updatepage.jsx";
import NewPostPage from "./routes/newPost/newPost.jsx";
import { ListPageLoader, profilePageLoader, SinglePageLoader } from "./lib/loaders.js";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>,
          loader:ListPageLoader
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader:SinglePageLoader
        },
        
        {
          path:"/register",
          element:<RegisterPage/>
        },
        {
          path:"/login",
          element:<LoginPage/>
        },
        
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>,
          loader:profilePageLoader
        },
        {
          path:"/profile/update",
          element:<UpdatePage/>
        },
        {
          path:"/addpost",
          element:<NewPostPage/>
        }
      ]
    }
  ]);

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App