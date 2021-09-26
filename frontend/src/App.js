import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <>
      <HeaderComponent />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <FooterComponent />
    </>
  );
};

export default App;
