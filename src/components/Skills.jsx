import SkillCard from './SkillCard.jsx'

function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <div className="section__inner">
        <p className="section__eyebrow">$ ls skills/</p>
        <h2 className="section__heading">Skills &amp; tools</h2>

        <div className="skills__grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
