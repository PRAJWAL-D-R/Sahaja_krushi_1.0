import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import './App.css';
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
