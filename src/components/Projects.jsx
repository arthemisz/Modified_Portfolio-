import ProjectCard from './ProjectCard.jsx'

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <div className="section__inner">
        <p className="section__eyebrow">$ cat projects.json</p>
        <h2 className="section__heading">Selected projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
