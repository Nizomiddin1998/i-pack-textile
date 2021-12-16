import Navbar from "./components/Navbar";
import Main from "./page/Main";
import Results from "./page/Results";
import Product from "./page/Product";
import Advantages from "./page/Advantages";
import Communication from "./page/Communication";
import Footer from "./components/Footer";
import AboutPage from "./page/AboutPage";
import Equipment from "./page/Equipment";

function App() {
    return (
        <div>
            <Navbar/>
            <Main/>
            <AboutPage/>
            <Results/>
            <Product/>
            <Equipment/>
            <Advantages/>
            <Communication/>
            <Footer/>
        </div>
    );
}

export default App;
