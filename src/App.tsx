import BackToTopButton from "./animation/BackToTopButton/BackToTopButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRouter from "./router";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
