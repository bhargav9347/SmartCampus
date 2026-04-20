import React from "react";

function UserProfile({ user, bookings, onCancel, onBack }) {
  const userBookings = bookings.filter(b => b.email === user.email);

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0 }}>My Profile</h1>
        <button 
          onClick={onBack} 
          style={{ width: 'auto', padding: '8px 16px', background: 'var(--glass)', border: '1px solid var(--glass-border)' }}
        >
          Back to Events
        </button>
      </div>

      <div className="card">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ 
            width: "80px", 
            height: "80px", 
            background: "linear-gradient(135deg, var(--primary), var(--secondary))", 
            borderRadius: "50%", 
            margin: "0 auto 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: 700
          }}>
            {user.username.charAt(0).toUpperCase()}
          </div>
          <h2 style={{ border: "none", marginBottom: "0.2rem" }}>{user.username}</h2>
          <p>{user.email}</p>
          <div className="success-badge">
            {userBookings.length} {userBookings.length === 1 ? 'Event' : 'Events'} Registered
          </div>
        </div>

        <h3 style={{ marginBottom: "1rem", color: "var(--text-main)" }}>Your Registrations</h3>
        
        {userBookings.length === 0 ? (
          <p style={{ textAlign: "center", padding: "2rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px" }}>
            You haven't registered for any events yet.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {userBookings.map((booking, index) => (
              <div key={index} className="card" style={{ margin: 0, padding: "1.2rem", background: "rgba(255,255,255,0.03)" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ color: "var(--text-main)", marginBottom: "0.4rem" }}>{booking.eventName}</h4>
                    <p style={{ fontSize: "0.85rem", margin: 0 }}>Tickets: <b>{booking.tickets}</b> • Total: <b>₹{booking.total}</b></p>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                      Booked on: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <button 
                    onClick={() => onCancel(booking)}
                    style={{ 
                      width: 'auto', 
                      padding: '8px 12px', 
                      fontSize: '0.75rem', 
                      background: 'rgba(239, 68, 68, 0.1)', 
                      color: 'var(--error)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      marginTop: 0
                    }}
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
