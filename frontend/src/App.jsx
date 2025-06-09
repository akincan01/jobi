import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Jobi</h1>
        <p className="home-subtitle">
          An app that matches you the best job, all integrated
        </p>
        <div className="button-group">
          <button
            className="home-btn"
            onClick={() => navigate('/register')}
          >
            Sign in as User
          </button>
          <button
            className="home-btn"
            onClick={() => navigate('/register/business')}
          >
            Sign in as Business
          </button>
          <button
            className="home-btn"
            onClick={() => navigate('/login')}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
