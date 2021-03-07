import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Trending from "./components/Trending";
import GiftCard from "./components/GiftCard";
import CakeInfo from "./components/CakeInfo";
import Error from "./components/Error";
import About from "./components/About";
import cupcake2 from "./assets/cupcake2.png";
import cupcake4 from "./assets/cupcake4.png";
import cupcake3 from "./assets/cupcake3.png";
import cupcake from "./assets/cupcake.png";

const cakes = [
  {
    img: cupcake2,
    name: "Dark Berry",
    rating: 4.8,
  },
  {
    img: cupcake4,
    name: "Tripple Berry",
    rating: 4.7,
  },
  {
    img: cupcake3,
    name: "Sweet Rainbow",
    rating: 4.6,
  },
  {
    img: cupcake,
    name: "Pink Heart",
    rating: 4.5,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HeroSection />
          </Route>
          <Route exact path="/menu">
            <Menu cakes={cakes} />
          </Route>
          <Route exact path="/trending">
            <Trending cakes={cakes} />
          </Route>
          <Route exact path="/gift">
            <GiftCard />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cake-info/:id">
            <CakeInfo cakes={cakes} />
          </Route>
          <Error />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
