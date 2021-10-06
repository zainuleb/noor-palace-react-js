import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import Destinations from "./pages/Destinations";
import Restuarant from "./pages/Restuarant.js";
import Services from "./pages/Services.js";
import SignIn from "./pages/Login.js";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/destinations" exact component={Destinations} />
        <Route path="/services" exact component={Restuarant} />
        <Route path="/restuarant" exact component={Services} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
