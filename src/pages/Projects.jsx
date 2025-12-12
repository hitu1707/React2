import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ChatApp',
      description: 'A simple chat application built with React.',
      link: '#'
    },
    {
      id: 2,
      title: 'Hospital Management System',
      description: 'A hospital management system built with React.',
      link: 'https://hospital-management-aqxt.onrender.com/'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'My personal portfolio website.',
      link: 'https://hitu1707.github.io/portfolio/'
    },
    {
      id: 4,
      title: 'More to come soon...',
      description: 'Stay tuned for more projects!',
    }
  ]

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects