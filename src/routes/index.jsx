import UserRoot from "../pages/User/UserRoot";
import CreateNews from "../pages/User/CreateNews";
import Login from "../pages/User/Login";
import News from "../pages/User/News";
import PublisherDetail from "../pages/User/PublisherDetail";
import Publishers from "../pages/User/Publishers";
import Register from "../pages/User/Register";
import Subscriptions from "../pages/User/Subscriptions";
import UserDetail from "../pages/User/UserDetail";

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
        path:'users',
        element:<PublisherDetail/>
      },
      {
        path: "publiahers",
        element: <Publishers />,
      },
      {
        path: "subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "user-details",
        element: <UserDetail />,
      }
    ],
  },
  // {
  //   path: "/admin",
  //   element: <AdminRoot />,
  //   children: [
  //       {
  //           index: true,
  //           element: <AdminLogin/>
  //       },
  //       {
  //         path: 'users',
  //         element: <UsersPage/>
  //     }
  //   ]
  // },
];
