import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import sdsTechImg from '../assets/projects/sds_tech.png';
import hospitalMgmtImg from '../assets/projects/hospital_mgmt.png';
import careerPortalImg from '../assets/projects/career_portal.png';

const ProjectCard = ({ title, description, tags, github, live, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="project-card-luxury"
        whileTap={{ borderColor: '#FFFFFF', scale: 0.97 }}
    >
        <div className="project-image-container" style={{ pointerEvents: 'none' }}>
            {image ? (
                <img src={image} alt={title} className="project-image" />
            ) : (
                <div className="project-image-placeholder">
                    <Code size={40} strokeWidth={1} />
                </div>
            )}
            <div className="project-tags">
                {tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                ))}
            </div>
        </div>
        <div className="project-content">
            <h3 className="project-title" style={{ pointerEvents: 'none' }}>{title}</h3>
            <p className="project-description" style={{ pointerEvents: 'none' }}>{description}</p>
            <div className="project-actions" style={{ pointerEvents: 'auto' }}>
                <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} /> <span>Code</span>
                </a>
                <a href={live} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <ExternalLink size={16} /> <span>Live Demo</span>
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "SDS Technologies",
            description: "The official corporate hub for SDS Technologies. A premium MERN-stack platform engineered for high-performance service delivery, featuring a sophisticated glassmorphic UI and seamless client engagement modules.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/sivapragadheeswarii/sds",
            live: "https://sds-24l4.vercel.app/",
            image: sdsTechImg,
            delay: 0.1
        },
        {
            title: "Hospital Management System",
            description: "A comprehensive healthcare ecosystem designed for multi-role management. Features distinct portals for Admins, Doctors, and Patients, streamlining appointments and medical records with real-time sync.",
            tags: ["Tailwind", "ReactJS", "Node", "MongoDB"],
            github: "https://github.com/sivapragadheeswarii/healthcare-mgt",
            live: "#",
            image: hospitalMgmtImg,
            delay: 0.2
        },
        {
            title: "AI Career Portal",
            description: "A sophisticated recruitment ecosystem powered by AI. Features intelligent job matching, automated candidate screening, and real-time interview coordination, built with a robust MERN stack and Tailwind CSS.",
            tags: ["React", "Tailwind", "Node", "MongoDB"],
            github: "https://github.com/sivapragadheeswarii/ai-career-hub",
            live: "#",
            image: careerPortalImg,
            delay: 0.3
        }
    ];

    return (
        <section id="projects" className="section-padding" style={{ position: 'relative' }}>
            <div className="projects-header-luxury">
                <span className="section-subtitle">Portfolio</span>
                <h2 className="section-title">Case <span className="gradient-text">Studies</span></h2>
                <div className="section-divider"></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }} className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <style>{`
                .projects-header-luxury {
                    margin-bottom: 4rem;
                }

                .section-subtitle {
                    display: block;
                    color: var(--accent-primary);
                    font-size: 0.9rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    margin-bottom: 0.5rem;
                }

                .section-title {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                }

                .section-divider {
                    width: 60px;
                    height: 3px;
                    background: var(--accent-primary);
                    border-radius: 2px;
                }

                .project-card-luxury {
                    background: rgba(26, 9, 13, 0.4);
                    backdrop-filter: blur(20px);
                    border: 1px solid var(--glass-border);
                    border-radius: 24px;
                    overflow: hidden;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .project-card-luxury:hover {
                    transform: translateY(-10px);
                    border-color: var(--accent-gold);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
                                0 0 20px rgba(139, 30, 63, 0.2);
                }

                .project-card-luxury:active {
                    border-color: #FFFFFF !important;
                    transform: scale(0.97) translateY(-10px) !important;
                    transition: all 0.1s ease;
                }

                .project-image-container {
                    position: relative;
                    height: 220px;
                    overflow: hidden;
                    background: var(--bg-secondary);
                }

                .project-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s ease;
                }

                .project-card-luxury:hover .project-image {
                    transform: scale(1.1);
                }

                .project-image-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-primary);
                    opacity: 0.3;
                }

                .project-tags {
                    position: absolute;
                    bottom: 1.5rem;
                    left: 1.5rem;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .project-tag {
                    padding: 0.3rem 0.8rem;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(243, 229, 171, 0.2);
                    color: var(--accent-gold);
                    border-radius: 100px;
                    font-size: 0.7rem;
                    font-weight: 500;
                }

                .project-content {
                    padding: 2.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .project-title {
                    font-size: 1.6rem;
                    margin-bottom: 1rem;
                    color: var(--text-primary);
                }

                .project-description {
                   color: var(--text-secondary);
                   font-size: 0.95rem;
                   line-height: 1.7;
                   margin-bottom: 2rem;
                   flex: 1;
                }

                .project-actions {
                    display: flex;
                    gap: 2rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--glass-border);
                }

                .project-link {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .project-link:hover {
                    color: var(--accent-gold);
                    transform: translateX(3px);
                }

                .project-link.live {
                    color: var(--accent-primary);
                }

                .project-link.live:hover {
                    color: var(--accent-gold);
                }

                @media (max-width: 992px) {
                    .section-title { font-size: 2.5rem; }
                    .project-content { padding: 2rem; }
                }

                @media (max-width: 600px) {
                    .projects-grid { gap: 1.5rem !important; grid-template-columns: 1fr !important; }
                    .section-title { font-size: 2.2rem !important; }
                    .project-title { font-size: 1.4rem; }
                    .project-description { font-size: 0.85rem; }
                    .project-image-container { height: 180px; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
