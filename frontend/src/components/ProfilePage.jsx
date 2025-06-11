import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>Profile Page</h1>
        <p>Profile content coming soon...</p>
        <button 
          onClick={() => navigate('/')} 
          style={styles.button}
        >
          Back to Home
        </button>
      </div>
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
  content: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default ProfilePage;