'use client';

import { useState, useEffect } from 'react';

interface PasswordGateProps {
  children: React.ReactNode;
  password: string;
  onSuccess?: () => void;
}

export default function PasswordGate({ children, password, onSuccess }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const savedAuth = localStorage.getItem('case-studies-auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      localStorage.setItem('case-studies-auth', 'true');
      onSuccess?.();
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('case-studies-auth');
  };

  if (isLoading) {
    return (
      <div className="password-gate">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div>
        <div className="password-gate-header">
          <div className="container">
            <div className="auth-status">
              <span className="auth-indicator">🔒 Protected</span>
              <button 
                onClick={handleLogout}
                className="btn btn-sm btn-outline"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="password-gate">
      <div className="container">
        <div className="password-form">
          <h2 className="text-2xl mb-sm text-white">Case Studies</h2>
          <p className="text-gray mb-lg">This content is password protected. Please enter the password to continue.</p>
          
          <form onSubmit={handleSubmit} className="password-input-form">
            <div className="input-group">
              <input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter password"
                className="password-input"
                autoFocus
              />
              <button type="submit" className="btn btn-primary">
                Access
              </button>
            </div>
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
