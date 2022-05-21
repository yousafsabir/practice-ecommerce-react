import "./App.css";
import Footer from "./components/footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Header from "./pages/header/Header";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Login /> */}
            {/* <Signup /> */}
            <Header />
            <Footer />
        </div>
    );
}

export default App;
