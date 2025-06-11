import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/accounts/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Token:', data);
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        navigate('/profile'); // redirect after login
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Login failed');
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Log In</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Log In
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          style={styles.backButton}
        >
          Back to Homepage
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '3rem',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    minWidth: '400px',
  },
  heading: {
    margin: 0,
    fontSize: '2rem',
    textAlign: 'center',
  },
  input: {
    padding: '1.25rem',
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '1rem',
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
  backButton: {
    padding: '1rem',
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#333',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
};

export default LoginPage;
// This code defines a LoginPage component that allows users to log in using their username and password.
// It handles form submission, sends a POST request to the backend for authentication, and manages error states.
// The component uses React hooks for state management and the useNavigate hook from react-router-dom for navigation.
// This code defines a LoginPage component that allows users to log in using their username and password.
// It handles form submission, sends a POST request to the backend for authentication, and manages error states.
// The component uses React hooks for state management and the useNavigate hook from react-router-dom for navigation.
// This code defines a LoginPage component that allows users to log in using their username and password.
// It handles form submission, sends a POST request to the backend for authentication, and manages error states.
// The component uses React hooks for state management and the useNavigate hook from react-router-dom for navigation.
// This code defines a LoginPage component that allows users to log in using their username and password.
// It handles form submission, sends a POST request to the backend for authentication, and manages error states.
// The component uses React hooks for state management and the useNavigate hook from react-router-dom for navigation.
// This code defines a LoginPage component that allows users to log in using their username and password.   