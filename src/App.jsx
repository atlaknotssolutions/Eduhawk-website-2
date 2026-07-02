import React from "react";
import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { router } from "./routes/routes.jsx";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Edu-Hawk Worldwide",
  url: "https://www.eduhawk.in/",
  logo: "https://www.eduhawk.in/src/assets/Eduhawk.png",
  description:
    "Edu-Hawk Worldwide helps Indian students secure MBBS admissions abroad in NMC-approved universities with expert counselling and complete support.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+91-XXXXXXXXXX",
    email: "info@eduhawk.in",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Edu-Hawk Worldwide",
  url: "https://www.eduhawk.in/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.eduhawk.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const App = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify([organizationSchema, websiteSchema])}
        </script>
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
