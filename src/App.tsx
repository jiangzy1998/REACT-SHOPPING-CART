import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={ <Home></Home> }></Route>
          <Route path="/store" element={ <Store></Store> }></Route>
          <Route path="/about" element={ <About></About> }></Route>
        </Routes>
      </Container>
    </>
    
  )
}

export default App
