import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Error from '../Components/Error';
import Dinning from '../Components/Dinning';
import Delivery from '../Components/Delivery';
import NightLife from '../Components/NightLife';
import Main from '../Components/Main';
import ResturantPage from '../Components/ResturantPage';

const AppRouter = createBrowserRouter(
    [
      {
        path:"/",
        element:<App/>,
        children:[
          {
           path:"/",
           element:<Main/>,
  
  
          },
          {
            path:"/Dining",
            element:<Dinning/>,
           
          },
          {
            path:"/Delivery",
            element:<Delivery/>,
            
          },
          {
            path:"/NightLife",
            element:<NightLife/>,
            
          },
          {
            path:"/Dining/Resturant/:id",
            element:<ResturantPage/>,
          }
  
        ],
        errorElement:<Error/>
      },
      
    
    ]
  )


  export default AppRouter
