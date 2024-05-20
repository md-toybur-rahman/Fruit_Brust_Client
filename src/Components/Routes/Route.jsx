import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import All_fruites from "../Pages/All_Fruites/All_fruites";
import Add_fruit from "../Pages/Add_fruit/Add_fruit";
import Sign_up from "../Pages/Sign_up/Sign_up";
import Sign_in from "../Pages/Sign_In/Sign_in";
import PrivateRoute from "./PrivateRoute";
import Fruit_details from "../Pages/Fruit_details/Fruit_details";
import Carts from "../Pages/Cart/Carts";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch('http://localhost:5000/all_fruit'),
			},
			{
				path: "/all_fruits",
				element: <PrivateRoute><All_fruites></All_fruites></PrivateRoute>,
				loader: () => fetch('http://localhost:5000/all_fruit')
			},
			{
				path:"/add_fruit",
				element: <Add_fruit></Add_fruit>
			},
			{
				path:"/sign_up",
				element: <Sign_up></Sign_up>
			},
			{
				path:"/sign_in",
				element: <Sign_in></Sign_in>
			},
			{
				path:"/fruit_details/:id",
				element: <Fruit_details></Fruit_details>,
				loader: ({params}) => fetch(`http://localhost:5000/fruit/${params.id}`)
			},
			{
				path:"/carts",
				element: <Carts></Carts>,
				loader: () => fetch(`http://localhost:5000/carts`)
			}
		]
	}
])


export default router;