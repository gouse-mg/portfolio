import { BookOpen, Code, Terminal, Database, GitBranch, Briefcase, Mail, Phone } from 'lucide-react';
import ProfileCard from './ProfileCard';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-profile-wrapper">
        <ProfileCard
          name="MD Gouse"
          title="Computer Science Student"
          handle="gouse-mg"
          status="Cyber Security"
          contactText="Contact Me"
          avatarUrl="/avatar.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          behindGlowEnabled={false} /* Disabled here to fit cleanly in sidebar */
          innerGradient="linear-gradient(145deg, rgba(10, 10, 10, 0.8) 0%, rgba(0, 229, 255, 0.1) 100%)"
        />
        
        {/* Contact Links added directly below Profile Card */}
        <div className="sidebar-contact-links">
          <a href="https://github.com/gouse-mg" target="_blank" rel="noreferrer" className="contact-btn">
            <GitBranch size={16}/> GitHub
          </a>
          <a href="https://linkedin.com/in/mahammad-gouse-wanti" target="_blank" rel="noreferrer" className="contact-btn">
            <Briefcase size={16}/> LinkedIn
          </a>
          <a href="mailto:mdgouse3030@gmail.com" className="contact-btn">
            <Mail size={16}/> Email
          </a>
          <a href="tel:+919902716703" className="contact-btn">
            <Phone size={16}/> 9902716703
          </a>
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Education</h3>
        <div className="sidebar-list">
          <div className="sidebar-item">
            <BookOpen size={16} className="icon-accent" />
            <div>
              <h4>B.E in Computer Science (Cyber Security)</h4>
              <p>MS Ramaiah Institute of Technology</p>
              <p>Expected OCT 2027 • GPA: 8.12 / 10</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Technical Skills</h3>
        <div className="sidebar-skills">
          <span className="skill-badge"><Code size={12} /> C</span>
          <span className="skill-badge"><Code size={12} /> C++</span>
          <span className="skill-badge"><Code size={12} /> Python</span>
          <span className="skill-badge"><Code size={12} /> Java</span>
          <span className="skill-badge"><Terminal size={12} /> PyTorch</span>
          <span className="skill-badge"><Terminal size={12} /> TensorFlow</span>
          <span className="skill-badge"><Database size={12} /> MySQL</span>
          <span className="skill-badge"><Database size={12} /> MongoDB</span>
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Tools</h3>
        <div className="sidebar-skills">
          <span className="skill-badge">Git</span>
          <span className="skill-badge">GitHub</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
