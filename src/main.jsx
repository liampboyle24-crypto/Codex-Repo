import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const roomSignals = [
  ['Room 12', 'Camera handshake delayed', 'IMS monitoring'],
  ['Boardroom', 'Display firmware drift', 'Refresh plan queued'],
  ['Executive suite', 'Room readiness confirmed', 'Meeting-safe'],
];

const loop = ['Monitor', 'Detect', 'Resolve', 'Report', 'Recommend', 'Refresh'];

function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="IMS Technology Services home">
            <span className="brand-mark" aria-hidden="true">IMS</span>
            <span className="brand-text">Technology Services</span>
          </a>
          <div className="nav-links" aria-label="Page sections">
            <a href="#problem">Problem</a>
            <a href="#approach">Approach</a>
            <a href="#proof">Proof</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="briefing-label">Managed Services / executive accountability briefing</p>
            <h1 id="hero-title">Your AV environment needs one accountable owner.</h1>
            <p className="hero-lede">
              IMS turns collaboration rooms into a managed operating model — monitored, supported,
              reported, and planned before unreliable rooms become leadership liabilities.
            </p>
            <div className="cta-row" id="contact" aria-label="Contact IMS">
              <p className="cta-line">Stop letting rooms decide the meeting.</p>
              <a className="cta primary" href="tel:+16103611870">Call 610-361-1870</a>
              <a className="cta secondary" href="mailto:lboyle@imsts.com">Email lboyle@imsts.com</a>
            </div>
          </div>

          <aside className="operations-panel" aria-label="IMS accountable operating model">
            <div className="panel-topline">
              <span>Environment accountability</span>
              <strong>Live operating view</strong>
            </div>
            <div className="status-stack" id="problem">
              {roomSignals.map(([room, issue, owner], index) => (
                <div className="signal-row" key={room} style={{ '--i': index }}>
                  <span className="pulse" aria-hidden="true" />
                  <div>
                    <strong>{room}</strong>
                    <p>{issue}</p>
                  </div>
                  <em>{owner}</em>
                </div>
              ))}
            </div>
            <div className="loop-map" id="approach" aria-label="Managed services closed loop">
              {loop.map((item, index) => (
                <span key={item} style={{ '--i': index }}>{item}</span>
              ))}
            </div>
            <p className="panel-note">
              Install day is not the finish line. IMS monitors, detects, resolves, reports,
              recommends, and refreshes with a clear owner.
            </p>
          </aside>
        </div>

        <div className="proof-strip" id="proof" aria-label="IMS proof points">
          <div>
            <strong>2025</strong>
            <span>Integrator of the Year</span>
          </div>
          <div>
            <strong>ISO/IEC</strong>
            <span>27001:2022 certified</span>
          </div>
          <div>
            <strong>30+</strong>
            <span>Years of AV experience</span>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
