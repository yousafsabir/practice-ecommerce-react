import "./App.css";
import Footer from "./components/footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/Signup/Signup";
import About from "./pages/about/About";
import Header from "./pages/header/Header";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Login /> */}
            {/* <Signup /> */}
            <Header />
            <About />
            <Footer />
        </div>
    );
}

export default App;
