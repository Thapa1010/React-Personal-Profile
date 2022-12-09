import Info from "../components/Info";
import Main from "../components/Main";
import About from "../components/About";
import Footer from "../components/footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Main />
      <Info />
      <About />
      <Footer />
    </div>
  );
}

export default App;
