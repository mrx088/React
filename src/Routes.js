import Home from "./Componens/Home/Home"
import Offers from "./Componens/Offers/Offers"
import Comments from "./Componens/Comments/Comments"
import Users from "./Componens/Users/Users"
import Products from "./Componens/Prouducts/Products"
import Purchase from "./Componens/Purchase/Purchase"

export let Routes = [
    {path:'',element:<Home></Home>},
    {path:'/users',element:<Users></Users>},
    {path:'/products',element:<Products></Products>},
    {path:'/comments',element:<Comments></Comments>},
    {path:'/offers',element:<Offers></Offers>},
    {path:'/purchase',element:<Purchase></Purchase>},

    
]