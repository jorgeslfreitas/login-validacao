import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

  import { Login } from './pages/Login';
  import { LoginAutenticado } from './pages/LoginAutenticado';
  
  
  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/LoginAutenticado" element={ <LoginAutenticado />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  