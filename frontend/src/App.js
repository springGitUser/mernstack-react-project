import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
        </Container>
      </main>
      <FooterComponent />
    </Router>
  );
};

export default App;
