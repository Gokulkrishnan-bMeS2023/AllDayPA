import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import { NotFoundPage } from "./NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;


// import { Route, Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import { NotFoundPage } from "./NotFoundPage";

// // Dynamically import the page components
// const Home = lazy(() => import("./pages/Home/Home"));
// const About = lazy(() => import("./pages/About/About"));
// const Services = lazy(() => import("./pages/Services/Services"));
// const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
// const Contact = lazy(() => import("./pages/Contact/Contact"));

// const AppRouter = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/faq" element={<FAQ />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default AppRouter;
