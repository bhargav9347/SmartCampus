import React from "react";

function AdminDashboard({ events, bookings, onReset, onLogout }) {
  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h1>Admin Control</h1>
        <button 
          onClick={onLogout} 
          style={{ width: 'auto', padding: '8px 16px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', boxShadow: 'none' }}
        >
          Logout
        </button>
      </div>

      <div className="card">
        <h2>Events Inventory</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          {events.map(e => (
            <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <div>
                <h4 style={{ margin: 0, color: 'var(--text-main)' }}>{e.name}</h4>
                <p style={{ fontSize: '0.8rem', margin: '4px 0 0' }}>{e.availableTickets} tickets remaining</p>
              </div>
              <div style={{ 
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                background: e.availableTickets > 10 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: e.availableTickets > 10 ? 'var(--success)' : 'var(--error)',
                fontWeight: 600
              }}>
                {Math.round((e.availableTickets / 50) * 100)}%
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={onReset} 
          style={{ background: 'var(--secondary)', marginTop: '2rem' }}
        >
          Reset All Inventory
        </button>
      </div>

      <div className="card">
        <h2>Recent Bookings</h2>
        <p style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>Total Sales: ₹{bookings.reduce((sum, b) => sum + b.total, 0)}</p>
        
        {bookings.length === 0 ? (
          <p style={{ textAlign: 'center', opacity: 0.5, padding: '2rem' }}>No bookings recorded yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {bookings.map((b, i) => (
              <div key={i} style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{b.name}</span>
                  <span style={{ color: 'var(--success)', fontWeight: 600 }}>₹{b.total}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  {b.tickets} tickets for <b>{b.eventName}</b>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
