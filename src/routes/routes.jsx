import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout.jsx";

// Pages
import Home from "../pages/HeroSection.jsx";
import About from "../pages/About.jsx";
import Russian from "../pages/Country/Russian.jsx";
import Bangladesh from "../pages/Country/Bangladesh.jsx";
import Services from "../pages/Component/Services.jsx";
import Contact from "../pages/Component/Contact.jsx";
import Kazakhstan from "../pages/Country/kazakhstan.jsx";
import Kyrgyzstan from "../pages/Country/Kyrgyzstan.jsx";
import Armernia from "../pages/Country/Armernia.jsx";
import Belarus from "../pages/Country/Belarus.jsx";
import China from "../pages/Country/China.jsx";
import Egypt from "../pages/Country/Egypt.jsx";
import Georgia from "../pages/Country/Georgia.jsx";
import Iran from "../pages/Country/Iran.jsx";
import Nepal from "../pages/Country/Nepal.jsx";
import Tejikistan from "../pages/Country/Tejikistan.jsx";
import Uzbekistan from "../pages/Country/Uzbekistan.jsx";
import Vietnam from "../pages/Country/Vietnam.jsx";
import BlogSection from "../pages/Blog/BlogSection.jsx";
import Blog from "../pages/Component/Blog.jsx";
import BlogDetail from "../pages/Component/BlogDetail.jsx";
import AllIndia from "../pages/Country/India/AllIndia.jsx";
import Landingpage from "../pages/Landingpage/Landingpage.jsx";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";

export const router = createBrowserRouter([
  {
    path: "landingpage",
    element: <Landingpage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "mbbs-abroad/russia",
        element: <Russian />,
      },
      {
        path: "mbbs-abroad/bangladesh",
        element: <Bangladesh />,
      },
      {
        path: "mbbs-abroad/kazakhstan",
        element: <Kazakhstan />,
      },
      {
        path: "mbbs-abroad/armernia",
        element: <Armernia />,
      },
      {
        path: "mbbs-abroad/belarus",
        element: <Belarus />,
      },
      {
        path: "mbbs-abroad/china",
        element: <China />,
      },
      {
        path: "mbbs-abroad/kyrgyzstan",
        element: <Kyrgyzstan />,
      },
      {
        path: "mbbs-abroad/egypt",
        element: <Egypt />,
      },
      {
        path: "mbbs-abroad/georgia",
        element: <Georgia />,
      },
      {
        path: "mbbs-abroad/iran",
        element: <Iran />,
      },
      {
        path: "mbbs-abroad/nepal",
        element: <Nepal />,
      },
      {
        path: "mbbs-abroad/tajikistan",
        element: <Tejikistan />,
      },
      {
        path: "mbbs-abroad/uzbekistan",
        element: <Uzbekistan />,
      },
      {
        path: "mbbs-abroad/vietnam",
        element: <Vietnam />,
      },
      {
        path: "blog/education-blog",
        element: <BlogSection />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog/:slugOrId",
        element: <BlogDetail />,
      },
      {
        path: "allcollege",
        element: <AllIndia />,
      },
      {
        path: "terms-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

// Also export plain routes array for sitemap
export const routeList = [
  "/",
  "/about",
  "/mbbs-abroad/russia",
  "/mbbs-abroad/bangladesh",
  "/mbbs-abroad/kazakhstan",
  "/mbbs-abroad/armernia",
  "/mbbs-abroad/belarus",
  "/mbbs-abroad/china",
  "/mbbs-abroad/kyrgyzstan",
  "/mbbs-abroad/egypt",
  "/mbbs-abroad/georgia",
  "/mbbs-abroad/iran",
  "/mbbs-abroad/nepal",
  "/mbbs-abroad/tajikistan",
  "/mbbs-abroad/uzbekistan",
  "/mbbs-abroad/vietnam",
  "/blog/education-blog",
  "/blog",
  "/services",
  "/contact",
  "/allcollege",
  "/terms-conditions",
  "/privacy-policy",
  "/landingpage",
];
