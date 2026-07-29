const MAX_LEVEL = 5

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-card__top">
        <span className="skill-card__category">{skill.category}</span>
        <span className="skill-card__meter" aria-label={`Proficiency ${skill.level} out of ${MAX_LEVEL}`}>
          {Array.from({ length: MAX_LEVEL }).map((_, index) => (
            <span
              key={index}
              className={
                index < skill.level
                  ? 'skill-card__pip skill-card__pip--filled'
                  : 'skill-card__pip'
              }
            />
          ))}
        </span>
      </div>
      <p className="skill-card__name">{skill.name}</p>
    </div>
  )
}

export default SkillCard
