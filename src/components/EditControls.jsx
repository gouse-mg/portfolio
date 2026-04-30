import React, { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import './EditControls.css';

const EditControls = () => {
  const { isEditing, setIsEditing } = usePortfolio();
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleToggle = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setShowModal(true);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (password === '40024002gouseWanti') {
      setIsEditing(true);
      setShowModal(false);
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setPassword('');
    setError('');
  };

  return (
    <>
      <button
        className={`floating-edit-btn ${isEditing ? 'editing' : ''}`}
        onClick={handleToggle}
        aria-label={isEditing ? "Finish Editing" : "Edit Portfolio"}
        title={isEditing ? "Finish Editing" : "Edit Portfolio"}
      >
        {isEditing ? <Check size={24} /> : <Edit2 size={24} />}
      </button>

      {showModal && (
        <div className="password-modal-overlay">
          <div className="password-modal">
            <button className="close-btn" onClick={handleCancel}>
              <X size={20} />
            </button>
            <h3>Admin Access</h3>
            <p>Enter password to edit portfolio.</p>
            <form onSubmit={handleVerify}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
              />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="verify-btn">Verify</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditControls;
