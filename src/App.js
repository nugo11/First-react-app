import "./index.css";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header style="head" />
      <Main style="main" />
      <Footer style={"footer"} text={"Powered by w3.css"} />
    </div>
  );
}

export default App;
