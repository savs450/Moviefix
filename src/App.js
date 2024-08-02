import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";



function App() { 
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path='/' Component={Trending} exact/>
            <Route path='/movies' Component={Movies}/>
            <Route path='/series' Component={Series}/>
            <Route path='/search' Component={Search}/>           
          </Routes>
        </Container>
      </div>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
