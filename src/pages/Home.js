import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (<>
    <NavBar></NavBar>
    <Hero/>
    <Products/>
    <Footer/>
  </>);
};

export default Home;
