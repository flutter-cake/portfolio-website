import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

import AboutLight from "../Pages/AboutLight";
import ServicePage from "../Pages/ServicePage";
import ProjectPage from "../Pages/ProjectPage";
import ContactPage from "../Pages/ContactPage";
import TeamPage from "../Pages/TeamPage";
import TestimonialPage from "../Pages/TestimonialPage";
import ServiceDetailsLeft from "../Pages/ServiceDetailsLeft";
import ServiceDetailsRight from "../Pages/ServiceDetailsRight";
import ServiceDetailsCenter from "../Pages/ServiceDetailsCenter";
import ProjectDetailsLeft from "../Pages/ProjectDetailsLeft";
import ProjectDetailsRight from "../Pages/ProjectDetailsRight";
import ProejctDetailsCenter from "../Pages/ProejctDetailsCenter";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsLeft from "../Pages/BlogDetailsLeft";
import BlogDetailsRight from "../Pages/BlogDetailsRight";
import BlogDetailsCenter from "../Pages/BlogDetailsCenter";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/about",
            element:<AboutLight></AboutLight> ,
        }, 
        {
          path: "/service",
          element:<ServicePage></ServicePage> ,
        }, 
        {
          path: "/service/<serviceName>",
          element:<ServicePage></ServicePage> ,
        },
        {
          path: "/service/service-details",
          element:<ServiceDetailsLeft></ServiceDetailsLeft> ,
        }, 
        {
          path: "/service/service-details-right",
          element:<ServiceDetailsRight></ServiceDetailsRight> ,
        },
        {
          path: "/service/service-details-center",
          element:<ServiceDetailsCenter></ServiceDetailsCenter>,
        },                                  
        {
          path: "/project",
          element:<ProjectPage></ProjectPage> ,
        },
        {
          path: "/project/project-details",
          element:<ProjectDetailsLeft></ProjectDetailsLeft>,
        }, 
        {
          path: "/project/project-details-right",
          element:<ProjectDetailsRight></ProjectDetailsRight>,
        }, 
        {
          path: "/project/project-details-center",
          element:<ProejctDetailsCenter></ProejctDetailsCenter>,
        },                       
        {
          path: "/team",
          element:<TeamPage></TeamPage> ,
        }, 
        {
          path: "/testimonial",
          element:<TestimonialPage></TestimonialPage>,
        }, 
        {
          path: "/blog",
          element:<BlogPage></BlogPage> ,
        }, 
        {
          path: "/blog/blog-details",
          element:<BlogDetailsLeft></BlogDetailsLeft>,
        },
        {
          path: "/blog/blog-details-right",
          element:<BlogDetailsRight></BlogDetailsRight>,
        }, 
        {
          path: "/blog/blog-details-center",
          element:<BlogDetailsCenter></BlogDetailsCenter>,
        },                                                
        {
          path: "/contact",
          element:<ContactPage></ContactPage> ,
        },                                                                                 
      ],
    },               
  ]);