import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TrussTrax Playground
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
