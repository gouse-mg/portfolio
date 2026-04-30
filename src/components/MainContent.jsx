import { ExternalLink, GitBranch, Plus, Trash2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { usePortfolio } from '../context/PortfolioContext';
import './MainContent.css';

const MainContent = () => {
  const { data, isEditing, updatePersonalInfo, updateArrayItem, addArrayItem, deleteArrayItem } = usePortfolio();
  const { personalInfo, projects, experience, achievements } = data;

  const handleTagsChange = (e, id) => {
    const arr = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
    updateArrayItem('projects', id, 'tags', arr);
  };

  const handleBulletsChange = (e, id) => {
    const arr = e.target.value.split('\n').filter(Boolean);
    updateArrayItem('experience', id, 'bullets', arr);
  };

  return (
    <main className="main-content-container">
      
      {/* SECTION 1: Projects */}
      <section className="scroll-section" id="projects">
        <header className="main-intro">
          {isEditing ? (
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem'}}>
              <input className="edit-input" style={{fontSize: '2rem', fontWeight: 'bold'}} value={personalInfo.name} onChange={e => updatePersonalInfo('name', e.target.value)} placeholder="Full Name" />
              <input className="edit-input" value={personalInfo.title} onChange={e => updatePersonalInfo('title', e.target.value)} placeholder="Subtitle / Title" />
              <input className="edit-input" value={personalInfo.status} onChange={e => updatePersonalInfo('status', e.target.value)} placeholder="Status / Specialization" />
            </div>
          ) : (
            <>
              <h1 className="main-title">{personalInfo.name}</h1>
              <p className="main-subtitle">{personalInfo.title} • {personalInfo.status}</p>
            </>
          )}
        </header>
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <SpotlightCard key={project.id} className="project-card">
              {isEditing ? (
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%'}}>
                  <input className="edit-input" value={project.title} onChange={e => updateArrayItem('projects', project.id, 'title', e.target.value)} placeholder="Project Title" />
                  <input className="edit-input" value={project.link} onChange={e => updateArrayItem('projects', project.id, 'link', e.target.value)} placeholder="Project Link" />
                  <textarea className="edit-textarea" value={project.description} onChange={e => updateArrayItem('projects', project.id, 'description', e.target.value)} placeholder="Project Description" />
                  <textarea className="edit-textarea" value={project.tags.join(', ')} onChange={e => handleTagsChange(e, project.id)} placeholder="Comma separated tags" style={{minHeight: '40px'}} />
                  <button className="edit-action-btn delete" onClick={() => deleteArrayItem('projects', project.id)} style={{marginTop: 'auto'}}><Trash2 size={14}/> Delete Project</button>
                </div>
              ) : (
                <>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                      <a href={project.link} target="_blank" rel="noreferrer"><GitBranch size={18} /></a>
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <div className="tech-stack-tags">
                    {project.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                  </div>
                </>
              )}
            </SpotlightCard>
          ))}
        </div>
        {isEditing && (
          <button className="edit-action-btn add" onClick={() => addArrayItem('projects', {title: 'New Project', description: 'Description', tags: ['Tag'], link: '#'})}>
            <Plus size={16}/> Add New Project
          </button>
        )}
      </section>

      {/* SECTION 2: Experience */}
      <section className="scroll-section" id="experience">
        <h2>Experience</h2>
        <div className="timeline-container">
          {experience.map(exp => (
            <SpotlightCard key={exp.id} className="timeline-card">
              {isEditing ? (
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <input className="edit-input" value={exp.role} onChange={e => updateArrayItem('experience', exp.id, 'role', e.target.value)} placeholder="Role" />
                  <input className="edit-input" value={exp.company} onChange={e => updateArrayItem('experience', exp.id, 'company', e.target.value)} placeholder="Company" />
                  <input className="edit-input" value={exp.dates} onChange={e => updateArrayItem('experience', exp.id, 'dates', e.target.value)} placeholder="Dates" />
                  <textarea className="edit-textarea" value={exp.bullets.join('\n')} onChange={e => handleBulletsChange(e, exp.id)} placeholder="One bullet point per line" />
                  <button className="edit-action-btn delete" onClick={() => deleteArrayItem('experience', exp.id)}><Trash2 size={14}/> Delete Experience</button>
                </div>
              ) : (
                <>
                  <div className="timeline-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <span className="timeline-date">{exp.dates}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                  </ul>
                </>
              )}
            </SpotlightCard>
          ))}
        </div>
        {isEditing && (
          <button className="edit-action-btn add" onClick={() => addArrayItem('experience', {role: 'Role', company: 'Company', dates: 'Date', bullets: ['Responsibility']})}>
            <Plus size={16}/> Add Experience
          </button>
        )}
      </section>

      {/* SECTION 3: Achievements */}
      <section className="scroll-section" id="achievements">
        <h2>Achievements</h2>
        <div className="achievements-list">
          {achievements.map(ach => (
            <SpotlightCard key={ach.id} className="achievement-card">
              {isEditing ? (
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <input className="edit-input" value={ach.title} onChange={e => updateArrayItem('achievements', ach.id, 'title', e.target.value)} placeholder="Achievement Title" />
                  <textarea className="edit-textarea" value={ach.description} onChange={e => updateArrayItem('achievements', ach.id, 'description', e.target.value)} placeholder="Description" style={{minHeight: '40px'}} />
                  <button className="edit-action-btn delete" onClick={() => deleteArrayItem('achievements', ach.id)}><Trash2 size={14}/> Delete Achievement</button>
                </div>
              ) : (
                <>
                  <h3>{ach.title}</h3>
                  <p>{ach.description}</p>
                </>
              )}
            </SpotlightCard>
          ))}
        </div>
        {isEditing && (
          <button className="edit-action-btn add" onClick={() => addArrayItem('achievements', {title: 'New Achievement', description: 'Description'})}>
            <Plus size={16}/> Add Achievement
          </button>
        )}
      </section>

      {/* SECTION 4: Contact */}
      <section className="scroll-section" id="contact">
        <SpotlightCard className="contact-card" spotlightColor="rgba(0, 229, 255, 0.3)">
          <h2>Let's build something amazing.</h2>
          <p>I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href={`mailto:${personalInfo.email}`} className="cta-button">Say Hello</a>
        </SpotlightCard>
      </section>

    </main>
  );
};

export default MainContent;
