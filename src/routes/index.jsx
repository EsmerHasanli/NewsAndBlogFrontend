import UserRoot from "../pages/User/UserRoot";
import CreateNews from "../pages/User/CreateNews";
import Login from "../pages/User/Login";
import News from "../pages/User/News";
import PublisherDetail from "../pages/User/PublisherDetail";
import Register from "../pages/User/Register";
import UserDetail from "../pages/User/UserDetail";
import NotFound from "../pages/User/NotFound"
import AdminRoot from "../pages/Admin/AdminRoot.tsx";
import AdminLogin from '../pages/Admin/Login';
import Publishers from '../pages/Admin/Publishers';

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <News />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "createnews",
        element: <CreateNews />,
      },
      {
        path:'publisher',
        element:<PublisherDetail/>
      },
      {
        path: "user",
        element: <UserDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
        {
            index: true,
            element: <AdminLogin/>
        },
        {
          path: "publishers",
          element: <Publishers />,
        },
    ]
  },
];
