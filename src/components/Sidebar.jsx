import { BookOpen, Code, Terminal, Database, GitBranch, Briefcase, Mail, Phone, Plus, Trash2 } from 'lucide-react';
import ProfileCard from './ProfileCard';
import { usePortfolio } from '../context/PortfolioContext';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const { data, isEditing, updatePersonalInfo, updateArrayItem, addArrayItem, deleteArrayItem, updateFlatArray } = usePortfolio();
  const { personalInfo, education, technicalSkills, tools } = data;

  const handleSkillChange = (e, field) => {
    const arr = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
    updateFlatArray(field, arr);
  };

  return (
    <aside className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-profile-wrapper">
        {isEditing && (
          <div className="edit-section" style={{marginBottom: '1rem'}}>
            <label style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>Avatar URL:</label>
            <input 
              className="edit-input" 
              value={personalInfo.avatarUrl} 
              onChange={(e) => updatePersonalInfo('avatarUrl', e.target.value)} 
            />
          </div>
        )}
        <ProfileCard
          name={personalInfo.name}
          title={personalInfo.title}
          handle={personalInfo.handle}
          status={personalInfo.status}
          contactText={personalInfo.contactText}
          avatarUrl={personalInfo.avatarUrl}
          showUserInfo={false}
          enableTilt={!isEditing}
          enableMobileTilt={false}
          behindGlowEnabled={false}
          innerGradient="linear-gradient(145deg, rgba(10, 10, 10, 0.8) 0%, rgba(0, 229, 255, 0.1) 100%)"
        />
        
        <div className="sidebar-contact-links">
          {isEditing ? (
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%'}}>
              <input className="edit-input" placeholder="GitHub URL" value={personalInfo.github} onChange={e => updatePersonalInfo('github', e.target.value)} />
              <input className="edit-input" placeholder="LinkedIn URL" value={personalInfo.linkedin} onChange={e => updatePersonalInfo('linkedin', e.target.value)} />
              <input className="edit-input" placeholder="Email" value={personalInfo.email} onChange={e => updatePersonalInfo('email', e.target.value)} />
              <input className="edit-input" placeholder="Phone" value={personalInfo.phone} onChange={e => updatePersonalInfo('phone', e.target.value)} />
            </div>
          ) : (
            <>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-btn"><GitBranch size={16}/> GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-btn"><Briefcase size={16}/> LinkedIn</a>
              <a href={`mailto:${personalInfo.email}`} className="contact-btn"><Mail size={16}/> Email</a>
              <a href={`tel:${personalInfo.phone}`} className="contact-btn"><Phone size={16}/> {personalInfo.phone}</a>
            </>
          )}
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Education</h3>
        <div className="sidebar-list">
          {education.map(edu => (
            <div key={edu.id} className="sidebar-item" style={{position: 'relative'}}>
              <BookOpen size={16} className="icon-accent" />
              <div style={{width: '100%'}}>
                {isEditing ? (
                  <>
                    <input className="edit-input" value={edu.degree} onChange={e => updateArrayItem('education', edu.id, 'degree', e.target.value)} placeholder="Degree" />
                    <input className="edit-input" value={edu.college} onChange={e => updateArrayItem('education', edu.id, 'college', e.target.value)} placeholder="College" />
                    <input className="edit-input" value={edu.duration} onChange={e => updateArrayItem('education', edu.id, 'duration', e.target.value)} placeholder="Duration" />
                    <input className="edit-input" value={edu.gpa} onChange={e => updateArrayItem('education', edu.id, 'gpa', e.target.value)} placeholder="GPA" />
                    <button className="edit-action-btn delete" onClick={() => deleteArrayItem('education', edu.id)}><Trash2 size={14}/> Delete</button>
                  </>
                ) : (
                  <>
                    <h4>{edu.degree}</h4>
                    <p>{edu.college}</p>
                    <p>{edu.duration} • GPA: {edu.gpa}</p>
                  </>
                )}
              </div>
            </div>
          ))}
          {isEditing && (
            <button className="edit-action-btn add" onClick={() => addArrayItem('education', {degree: 'New Degree', college: 'College Name', duration: 'Date', gpa: '0.0'})}>
              <Plus size={14}/> Add Education
            </button>
          )}
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Technical Skills</h3>
        {isEditing ? (
          <textarea 
            className="edit-textarea" 
            value={technicalSkills.join(', ')} 
            onChange={e => handleSkillChange(e, 'technicalSkills')}
            placeholder="Comma separated skills"
          />
        ) : (
          <div className="sidebar-skills">
            {technicalSkills.map((skill, i) => <span key={i} className="skill-badge"><Code size={12} /> {skill}</span>)}
          </div>
        )}
      </div>

      <div className="sidebar-section">
        <h3>Tools</h3>
        {isEditing ? (
          <textarea 
            className="edit-textarea" 
            value={tools.join(', ')} 
            onChange={e => handleSkillChange(e, 'tools')}
            placeholder="Comma separated tools"
          />
        ) : (
          <div className="sidebar-skills">
            {tools.map((tool, i) => <span key={i} className="skill-badge">{tool}</span>)}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
