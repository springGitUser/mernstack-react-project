import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <>
      <HeaderComponent />
      <main className="py-3">
        <Container>
          <h2>Welcome to Mern shop</h2>
        </Container>
      </main>
      <FooterComponent />
    </>
  );
};

export default App;
