
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import UsersStore from "../pages/UsersStore/UsersStore";
import AddUser from "../pages/AddUser/AddUser";
import UpdateUser from "../pages/UpdateIUser/UpdateUser";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout ></MainLayout>,
        children: [

            {
                path: '/',
                element: <UsersStore ></UsersStore>,
                loader: () => fetch('https://server-side-sable-sigma.vercel.app/users')
            },
            {
                path: 'adduser',
                element: <AddUser ></AddUser>
            },
            {
                path: 'updateuser/:id',
                element: <UpdateUser ></UpdateUser>,
                loader: ({ params }) => fetch(`https://server-side-sable-sigma.vercel.app/users/${params.id}`)
            }


        ]
    }
])

export default routers