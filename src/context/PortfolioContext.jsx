import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultState = {
  personalInfo: {
    name: "MD Gouse",
    title: "Computer Science Student",
    handle: "gouse-mg",
    status: "Cyber Security",
    contactText: "Contact Me",
    avatarUrl: "/avatar.png",
    email: "mdgouse3030@gmail.com",
    phone: "9902716703",
    github: "https://github.com/gouse-mg",
    linkedin: "https://linkedin.com/in/mahammad-gouse-wanti"
  },
  education: [
    {
      id: "edu1",
      degree: "B.E in Computer Science (Cyber Security)",
      college: "MS Ramaiah Institute of Technology",
      duration: "Expected OCT 2027",
      gpa: "8.12 / 10"
    }
  ],
  technicalSkills: ['C', 'C++', 'Python', 'Java', 'PyTorch', 'TensorFlow', 'MySQL', 'MongoDB'],
  tools: ['Git', 'GitHub'],
  projects: [
    {
      id: "p1",
      title: "Graph-Based Fraud Detection",
      description: "Built a graph-based fraud detection system on the Elliptic Bitcoin transaction dataset (203K nodes). Trained a 3-layer GraphSAGE network addressing severe class imbalance, achieving 97% test accuracy.",
      tags: ["Python", "PyTorch", "PyTorch Geometric", "GraphSAGE"],
      link: "#"
    },
    {
      id: "p2",
      title: "Denoising Diffusion Probabilistic Model (DDPM)",
      description: "Implemented a DDPM from scratch in PyTorch and trained it on Fashion-MNIST. Designed forward noise scheduling and reverse denoising network. Incorporated perceptual loss to enhance high-frequency feature reconstruction.",
      tags: ["PyTorch", "Deep Learning", "Generative Models", "Computer Vision"],
      link: "#"
    }
  ],
  experience: [
    {
      id: "e1",
      role: "Senior Software Engineer",
      company: "TechNova Inc.",
      dates: "2022 — Present",
      bullets: [
        "Architected and migrated the monolithic backend to a microservices architecture, improving uptime to 99.99%.",
        "Led a team of 5 engineers to deliver a real-time collaborative editing feature using WebSockets.",
        "Optimized database queries, reducing average API response times by 40%."
      ]
    },
    {
      id: "e2",
      role: "Software Engineer",
      company: "DataSphere Solutions",
      dates: "2020 — 2022",
      bullets: [
        "Developed custom internal data pipelining tools, saving analysts over 20 hours per week.",
        "Implemented automated CI/CD pipelines using GitHub Actions and AWS CodeDeploy."
      ]
    }
  ],
  achievements: [
    {
      id: "a1",
      title: "🏆 1st Place - Global Hackathon 2023",
      description: "Developed an accessibility-first navigation app outperforming 500+ competing teams."
    },
    {
      id: "a2",
      title: "⭐ Open Source Contributor",
      description: "Merged 20+ PRs into top-tier open source projects including React and Vite."
    },
    {
      id: "a3",
      title: "🎓 Top 1% Graduating Class",
      description: "Graduated Summa Cum Laude with honors in Computer Science."
    }
  ]
};

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse portfolio data from local storage", e);
      }
    }
    return defaultState;
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  const updatePersonalInfo = (field, value) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateArrayItem = (arrayName, id, field, value) => {
    setData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const addArrayItem = (arrayName, newItem) => {
    setData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], { id: Date.now().toString(), ...newItem }]
    }));
  };

  const deleteArrayItem = (arrayName, id) => {
    setData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter(item => item.id !== id)
    }));
  };

  // For flat arrays like skills and tools
  const updateFlatArray = (arrayName, newArray) => {
    setData(prev => ({ ...prev, [arrayName]: newArray }));
  };

  return (
    <PortfolioContext.Provider value={{
      data,
      isEditing,
      setIsEditing,
      updatePersonalInfo,
      updateArrayItem,
      addArrayItem,
      deleteArrayItem,
      updateFlatArray
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
