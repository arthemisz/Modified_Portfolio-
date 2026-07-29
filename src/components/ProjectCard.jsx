function ProjectCard({ project }) {
  const isShipped = project.status === 'shipped'

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <span
          className={
            isShipped
              ? 'project-card__status'
              : 'project-card__status project-card__status--progress'
          }
        >
          {isShipped ? 'shipped' : 'in progress'}
        </span>
      </div>

      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__tech">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="project-card__links">
        <a
          href={project.githubUrl}
          className="project-card__link"
          target="_blank"
          rel="noreferrer"
        >
          Code →
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="project-card__link"
            target="_blank"
            rel="noreferrer"
          >
            Live demo →
          </a>
        ) : (
          <span className="project-card__link project-card__link--disabled">
            No live demo yet
          </span>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
