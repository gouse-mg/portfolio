import { ExternalLink, GitBranch } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content-container">
      
      {/* SECTION 1: Projects */}
      <section className="scroll-section" id="projects">
        <header className="main-intro">
          <h1 className="main-title">MD Gouse</h1>
          <p className="main-subtitle">Computer Science Student • Cyber Security</p>
        </header>
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          <SpotlightCard className="project-card">
            <div className="project-header">
              <h3>Graph-Based Fraud Detection</h3>
              <div className="project-links">
                <a href="#"><GitBranch size={18} /></a>
              </div>
            </div>
            <p>Built a graph-based fraud detection system on the Elliptic Bitcoin transaction dataset (203K nodes). Trained a 3-layer GraphSAGE network addressing severe class imbalance, achieving 97% test accuracy.</p>
            <div className="tech-stack-tags">
              <span>Python</span>
              <span>PyTorch</span>
              <span>PyTorch Geometric</span>
              <span>GraphSAGE</span>
            </div>
          </SpotlightCard>

          <SpotlightCard className="project-card">
            <div className="project-header">
              <h3>Denoising Diffusion Probabilistic Model (DDPM)</h3>
              <div className="project-links">
                <a href="#"><GitBranch size={18} /></a>
              </div>
            </div>
            <p>Implemented a DDPM from scratch in PyTorch and trained it on Fashion-MNIST. Designed forward noise scheduling and reverse denoising network. Incorporated perceptual loss to enhance high-frequency feature reconstruction.</p>
            <div className="tech-stack-tags">
              <span>PyTorch</span>
              <span>Deep Learning</span>
              <span>Generative Models</span>
              <span>Computer Vision</span>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* SECTION 2: Experience (Kept fake as requested) */}
      <section className="scroll-section" id="experience">
        <h2>Experience</h2>
        <div className="timeline-container">
          <SpotlightCard className="timeline-card">
            <div className="timeline-header">
              <div>
                <h3>Senior Software Engineer</h3>
                <h4>TechNova Inc.</h4>
              </div>
              <span className="timeline-date">2022 — Present</span>
            </div>
            <ul className="timeline-bullets">
              <li>Architected and migrated the monolithic backend to a microservices architecture, improving uptime to 99.99%.</li>
              <li>Led a team of 5 engineers to deliver a real-time collaborative editing feature using WebSockets.</li>
              <li>Optimized database queries, reducing average API response times by 40%.</li>
            </ul>
          </SpotlightCard>

          <SpotlightCard className="timeline-card">
            <div className="timeline-header">
              <div>
                <h3>Software Engineer</h3>
                <h4>DataSphere Solutions</h4>
              </div>
              <span className="timeline-date">2020 — 2022</span>
            </div>
            <ul className="timeline-bullets">
              <li>Developed custom internal data pipelining tools, saving analysts over 20 hours per week.</li>
              <li>Implemented automated CI/CD pipelines using GitHub Actions and AWS CodeDeploy.</li>
            </ul>
          </SpotlightCard>
        </div>
      </section>

      {/* SECTION 3: Achievements (Kept fake as requested) */}
      <section className="scroll-section" id="achievements">
        <h2>Achievements</h2>
        <div className="achievements-list">
          <SpotlightCard className="achievement-card">
            <h3>🏆 1st Place - Global Hackathon 2023</h3>
            <p>Developed an accessibility-first navigation app outperforming 500+ competing teams.</p>
          </SpotlightCard>
          
          <SpotlightCard className="achievement-card">
            <h3>⭐ Open Source Contributor</h3>
            <p>Merged 20+ PRs into top-tier open source projects including React and Vite.</p>
          </SpotlightCard>

          <SpotlightCard className="achievement-card">
            <h3>🎓 Top 1% Graduating Class</h3>
            <p>Graduated Summa Cum Laude with honors in Computer Science.</p>
          </SpotlightCard>
        </div>
      </section>

      {/* SECTION 4: Contact */}
      <section className="scroll-section" id="contact">
        <SpotlightCard className="contact-card" spotlightColor="rgba(0, 229, 255, 0.3)">
          <h2>Let's build something amazing.</h2>
          <p>I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:mdgouse3030@gmail.com" className="cta-button">Say Hello</a>
        </SpotlightCard>
      </section>

    </main>
  );
};

export default MainContent;
