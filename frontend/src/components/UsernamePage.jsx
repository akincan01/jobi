import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UsernamePage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        alert(`User created: ${username}`);
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Backend error:', errorData);
        alert('Submission failed: ' + (errorData.username?.[0] || errorData.password?.[0] || 'Unknown error'));
      }
    } catch (err) {
      console.error('Network or server error:', err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>
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
          Register
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
};


export default UsernamePage;
