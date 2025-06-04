import './Home.css';
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
        <button
          className="get-started-btn"
          onClick={() => navigate('/username')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
