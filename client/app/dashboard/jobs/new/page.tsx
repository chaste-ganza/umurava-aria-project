import React from 'react';
import './create-job.css';

export default function CreateJobPage() {
  return (
    <div className="page-container">
      <header className="page-header bg-transparent">
        <h1 className="text-h1">Create Job</h1>
      </header>

      <form className="create-job-form">
        <div className="form-section active-section">
          <h2 className="section-title">Role</h2>
          <div className="input-group row-input">
            <label className="input-label" style={{textTransform: 'none', fontSize: '0.875rem', width: '100px'}}>Job title:</label>
            <input type="text" className="input-field" placeholder="Enter job title..." style={{ flex: 1, backgroundColor: 'var(--surface-hover)' }} />
          </div>
        </div>
      </form>
    </div>
  );
}
